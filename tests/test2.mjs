import { bundleMDX } from "mdx-bundler";
import rehypePrism from 'rehype-prism-plus'
import fs from 'fs'
import rehypeSlug from "rehype-slug";
import rehypeParse from "rehype-parse";
// import remarkParse from "remark-parse/lib";
import remarkGfm from "remark-gfm";

process.env.NODE_ENV  = "dev"
const content = fs.readFileSync("tests/2.md", "utf8")
let toc = [];
bundleMDX({
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
        remarkGfm,
        ]
        options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        // rehypeSlug,
        // rehypeParse,
        rehypePrism,
        // [rehypeKatex, {externalTex: tex}],
        ]
        return options
    },
}).then((code)=> {
    console.log(code);
})