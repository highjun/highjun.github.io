import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import customBundleMDX from './mdx';

const blogsDirectory = path.join(process.cwd(), 'data', 'posts');

// get blog posts from data file
export function getSortedBlogsData() {
  const fileNames = fs.readdirSync(blogsDirectory);
  let allBlogsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    matterResult.data["image_path"] = path.join("/images", matterResult.data["image"]);
    
    // Combine the data with the id
    return {  
      id,
      ...matterResult.data,
      link: "/posts/" + id
    };
  });
  allBlogsData = allBlogsData.filter(val => !val["isDraft"])
  // Sort posts by date
  return allBlogsData.sort((a, b) => a.date - b.date);
}


export async function getBlogDataByID(id){
  const source = path.join(blogsDirectory, id+".md");
  const data = await customBundleMDX(source);
  return data
}

export function getAllPosts(){
  let files = fs.readdirSync(blogsDirectory);
  files =  files.filter((file) => {
    const fileContents = fs.readFileSync(path.join(blogsDirectory, file), 'utf8');
    const matterResult = matter(fileContents);
    return !matterResult.data["isDraft"]
  });
  return files;
}