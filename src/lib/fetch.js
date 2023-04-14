import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDirectory = path.join(process.cwd(), 'data', 'blogs');

// get blog posts from data file
export async function getSortedBlogsData() {
  const fileNames = fs.readdirSync(blogsDirectory);
  const allBlogsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
      content: matterResult.content
    };
  });
  // Sort posts by date
  return allBlogsData.sort((a, b) => a.date - b.date);
}