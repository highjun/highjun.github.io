import { bundleMDX } from "mdx-bundler";


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
            remarkExtractFrontmatter,
            [remarkTocHeadings, { exportRef: toc }],
            remarkGfm,
            remarkCodeTitles,
            [remarkFootnotes, { inlineNotes: true }],
            remarkMath,
            remarkImgToJsx,
          ]
          options.rehypePlugins = [
            ...(options.rehypePlugins ?? []),
            rehypeSlug,
            rehypeAutolinkHeadings,
            rehypeKatex,
            [rehypeCitation, { path: path.join(root, 'data') }],
            [rehypePrismPlus, { ignoreMissing: true }],
            rehypePresetMinify,
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