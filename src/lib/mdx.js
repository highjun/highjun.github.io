import { bundleMDX } from "mdx-bundler";
import { rehypePrism, rehypeKatex, rehypeSlug, rehypePresetMinify } from "./rehype";
import { remarkTOC, remarkGfm, remarkMath } from './remark'
import fs from 'fs'
import path from 'path'

async function customBundleMDX(file_path) {
  const source = fs.readFileSync(file_path, "utf8")
  const slug = file_path.split("/")[2].replace(".md", "")
  let toc = [];
  const tex = path.join("data", "customCommands.tex");

  const { code, frontmatter } = await bundleMDX({
    source,
    mdxOptions(options, frontmatter) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        [remarkTOC, { exportRef: toc }], // parse the TOC
        remarkGfm, // add Github Flavor Markdown
        remarkMath, //Parse Mathematical Equations
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug, //Add value as ID to Headings: h1 ~ h6
        [rehypePrism, { ignoreMissing: true }], // Prettier Code Formatter
        [rehypeKatex, { externalTex: tex }],
        // Transform Mathematical Equation to KaTeX, 
        //and apply custom command from external Tex
        rehypePresetMinify
      ]
      return options
    },
    esbuildOptions(options, frontmatter) {
      options.minify = true
      
      return options
    },
  });
  return {
    mdxSource: code,
    toc,
    frontMatter: {
      slug: slug || null,
      ...frontmatter,
    },
  }
}

export default customBundleMDX