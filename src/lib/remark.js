import remarkGfm from 'remark-gfm'

import {visit} from 'unist-util-visit'
import {load} from 'js-yaml'



const remarkExtractFrontmatter = () => {
    return (tree, file) => {
        visit(tree, 'yaml', (node) => {
            file.data.frontmatter = load(node.value)
        })
    }
}

const remarkLinkCitations = () => {
    return (tree) => {
        visit(tree, 'text', (node, index, parent) => {
            console.log("node---------------")
            console.log(node.value)
            
        })
    }
};

export { remarkGfm, remarkExtractFrontmatter, remarkLinkCitations}