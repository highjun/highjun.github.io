import fs from 'fs'

import {unified} from "unified"
import { getMDXComponent } from "mdx-bundler/client/index.js";
import { remarkLinkCitations } from '../src/lib/remark.js';
import  remarkParse  from "remark-parse";
import  remarkRehype  from "remark-rehype";
import rehypeStringify  from "rehype-stringify"

process.env.NODE_ENV = 'development'

const markdown = fs.readFileSync('tests/1.md', 'utf-8');

// const { code } = await bundleMDX({
//     source: markdown,
//     xdmOptions(options) {
//         options.remarkPlugins = [
//             ...(options.remarkPlugins ?? []),
//             remarkExtractFrontmatter,
//             remarkGfm,
//         ]
//         return options
//     },
// })
// console.log(getMDXComponent(code))


unified()
    .use(remarkParse)
    .use(remarkLinkCitations)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown, (err, file) => {
        if (err) throw err;
        // console.log(String(file))
    });