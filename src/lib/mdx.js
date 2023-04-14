import { bundleMDX } from "mdx-bundler";
// import { rehypeKatex, rehypePrismPlus } from "./rehype";
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from "rehype-slug";
import { remarkTOC, remarkGfm, remarkVis} from './remark'
import fs from 'fs'

async function customBundleMDX(file_path){
    const content = fs.readFileSync(file_path, "utf8")
    const slug = file_path.split("/")[2].replace(".md","")
    let toc = [];
    const {code, frontmatter} = await bundleMDX({
        source: content,
        // mdx imports can be automatically source from the components directory
        // cwd: path.join(process.cwd(),"src", 'components'),
        xdmOptions(options) {
          // this is the recommended way to add custom remark/rehype plugins:
          // The syntax might look weird, but it protects you in case we add/remove
          // plugins in the future.
          options.remarkPlugins = [
            ...(options.remarkPlugins ?? []),
            // [remarkTOC, {exportRef : toc}],
            // [remarkCitation, {externalBibTeX: bibtex }],
            // remarkGfm,
          ]
          options.rehypePlugins = [
            ...(options.rehypePlugins ?? []),
            rehypeSlug,
            rehypePrism,
            // [rehypeKatex, {externalTex: tex}],
          ]
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