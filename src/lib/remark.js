import remarkGfm from 'remark-gfm'
import remarkMath from "remark-math";

import { visit } from 'unist-util-visit'

const remarkTOC = (options) => {
    return (tree) =>
        visit(tree, 'heading', (node, index, parent) => {
            const textContent = node.children[0].value
            options.exportRef.push({
                value: textContent,
                url: '#' + textContent.toLowerCase().split(' ').join(['-']),
                depth: node.depth,
            })
        })
}

const remarkVis = (options) => {
    console.log("I hope it works");
    return (tree) => {
        visit(tree, (node, index, parent) => {
            console.log(node);
        })
        console.log("=======================================")
    }
};


export { remarkGfm, remarkTOC, remarkMath, remarkVis}