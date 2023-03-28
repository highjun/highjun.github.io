import fs from 'fs'

import { remarkCitation, remarkTOC, remarkVis, remarkGfm } from '../src/lib/remark.js';
import { bundleMDX } from "mdx-bundler";
import { parseBibTeX } from '../src/lib/util.js';

process.env.NODE_ENV = 'development'

const markdown = fs.readFileSync('tests/1.md', 'utf-8');



let toc = [];
const bibtex = parseBibTeX("data/reference.bib");
bundleMDX({
    source: markdown,
    mdxOptions(options) {
        // this is the recommended way to add custom remark/rehype plugins:
        // The syntax might look weird, but it protects you in case we add/remove
        // plugins in the future.
        options.remarkPlugins = [
            ...(options.remarkPlugins ?? []),
            // remarkVis,

            [remarkTOC, {exportRef : toc}],
            [remarkCitation, {externalBibTeX: bibtex }],
            remarkGfm,
            remarkVis,
            
            // remarkCodeTitles,
            // remarkMath,
            // remarkImgToJsx,
        ]
        options.rehypePlugins = [
            ...(options.rehypePlugins ?? []),
        ]
        return options
    },
}).then((result_) => {
    const {code, frontmatter} = result_;
    // console.log(frontmatter)
    // console.log(toc)
    // console.log("Done!")
})