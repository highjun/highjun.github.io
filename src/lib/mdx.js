import { bundleMDX } from "mdx-bundler";
// import { rehypeKatex, rehypePrismPlus } from "./rehype";
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import { remarkTOC, remarkGfm, remarkVis } from './remark'
import remarkMath from "remark-math";
import fs from 'fs'
import path from 'path'

async function customBundleMDX(file_path) {
  const source = fs.readFileSync(file_path, "utf8")
  const slug = file_path.split("/")[2].replace(".md", "")
  let toc = [];

  // https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(process.cwd(), 'node_modules', 'esbuild', 'esbuild.exe')
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(process.cwd(), 'node_modules', 'esbuild', 'bin', 'esbuild')
  }

  const { code, frontmatter } = await bundleMDX({
    source,
    // mdx imports can be automatically source from the components directory
    // cwd: path.join(process.cwd(),"data", 'components'),
    xdmOptions(options, frontmatter) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkGfm, // add Github Flavor Markdown
        remarkMath, //Parse Mathematical Equations,
        remarkVis,
        // [remarkTOC, {exportRef : toc}], // parse the TOC
        // [remarkCitation, {externalBibTeX: bibtex }], // get reference info from Bibtex.

      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        // rehypeSlug, //Add ID to Headings: h1 ~ h6
        // rehypePrism, // Prettier Code Formatter
        // [rehypeKatex, {externalTex: tex}], 
        // Transform Mathematical Equation to KaTeX, 
        //and apply custom command from external Tex
      ]
      return options
    },
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        '.js': 'jsx',
      }
      return options
    },
  })
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