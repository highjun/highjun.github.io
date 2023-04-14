import {unified}  from 'unified'
import parse from 'rehype-parse'
import stringify from 'rehype-stringify'
import rehypePrism from 'rehype-prism-plus'

const processor = unified()
  .use(parse)
  .use(rehypePrism)
  .use(stringify)

const html = `<pre><code class="language-javascript">"const a = 1;"</code></pre>`

console.log(processor.processSync(html).toString())
