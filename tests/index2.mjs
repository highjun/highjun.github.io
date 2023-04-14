import { compile } from 'xdm'
import rehypePrism from 'rehype-prism-plus'

async function main(code) {
  console.log(String(await compile(code, { rehypePlugins: [rehypePrism] })))
}

main("~~~python\nimport os~~~")