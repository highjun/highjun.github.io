import { bundleMDX } from "mdx-bundler";
import { rehypeKatex } from "./rehype";
import { remarkTOC, remarkCitation, remarkGfm} from './remark'


async function convertMDToHTML(source){
    const {code, frontmatter} = await bundleMDX({
        source,
        // mdx imports can be automatically source from the components directory
        cwd: path.join(root, 'components'),
        xdmOptions(options, frontmatter) {
          // this is the recommended way to add custom remark/rehype plugins:
          // The syntax might look weird, but it protects you in case we add/remove
          // plugins in the future.
          options.remarkPlugins = [
            ...(options.remarkPlugins ?? []),
            [remarkTOC, {exportRef : toc}],
            [remarkCitation, {externalBibTeX: bibtex }],
            remarkGfm,
          ]
          options.rehypePlugins = [
            ...(options.rehypePlugins ?? []),
            [rehypeKatex, {externalTex: tex}]
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
          readingTime: readingTime(code),
          slug: slug || null,
          fileName: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
          ...frontmatter,
          date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
        },
      }
}