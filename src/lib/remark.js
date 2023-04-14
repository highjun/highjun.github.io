import remarkGfm from 'remark-gfm'

import { visit } from 'unist-util-visit'
// import { formatBibTeX } from '/util';

// const formatBibTeX = (data) => {
//     console.log(JSON.stringify(data))
//     return [data.fields.title, data.fields.author, data.fields.journal, data.fields.year].join(", ")
// }

// const remarkCitation = (options) => {
//     let references = [];
//     return (tree) => {
//         visit(tree, 'text', (node, index, parent) => {
//             const regex = /@\[([^\]]+)\]/g;
//             const matches = [...node.value.matchAll(regex)];
//             const newNodes = [];
//             let lastIdx = 0;
//             for (const match of matches) {
//                 const [matchText, citeKeys_] = match;
//                 const matchIdx = match.index;
//                 const citeKeys = citeKeys_.replace(" ", "").split(",")
//                 for (const citeKey of citeKeys) {
//                     if (!references.includes(citeKey)) {
//                         if (options.externalBibTeX.hasOwnProperty(citeKey)) {
//                             references.push(citeKey)
//                         }
//                         else {
//                             throw new Error(`CiteKey: ${citeKey} not exist`);
//                         }
//                     }
//                 }

//                 if (matchIdx > lastIdx) {
//                     newNodes.push({
//                         type: 'text',
//                         value: node.value.slice(lastIdx, matchIdx),
//                     });
//                 }
//                 newNodes.push(
//                     {
//                         type: 'paragraph',
//                         children: [
//                             {
//                                 type: 'text',
//                                 value: "[",
//                             },
//                             ...citeKeys.map((citeKey, idx) => {
//                                 return [{
//                                     type: 'cite',
//                                     data: {
//                                         hName: 'cite',
//                                         hProperties: {
//                                             'data-cite': citeKey,
//                                         },
//                                     },
//                                     children: [{ type: 'text', value: `${references.indexOf(citeKey) + 1}` }],
//                                 }, {
//                                     type: 'text',
//                                     value: idx === citeKeys.length - 1 ? '' : ','
//                                 }]
//                             }).flat(1),
//                             {
//                                 type: 'text',
//                                 value: "]",
//                             }
//                         ]
//                     }
//                 );

//                 lastIdx = matchIdx + matchText.length;
//             }
//             if (lastIdx < node.value.length) {
//                 newNodes.push({
//                     type: 'text',
//                     value: node.value.slice(lastIdx),
//                 });
//             }
//             parent.children.splice(index, 1, ...newNodes);
//         });
//         tree.children.push(
//             ...references.map(reference => {
//                 return {
//                     type: 'text',
//                     value: formatBibTeX(options.externalBibTeX[reference])
//                 }
//             })
//         )
//     }
// };

const remarkTOC = (options) => {
    return (tree) =>
        visit(tree, 'heading', (node, index, parent) => {
            const textContent = node.children[0].value
            options.exportRef.push({
                value: textContent,
                url: '#' + textContent,
                depth: node.depth,
            })
        })
}

const remarkVis = () => {
    return (tree) => {
        visit(tree, (node, index, parent) => {
            console.log(node);
        })
        console.log("=======================================")
    }
};


export { remarkGfm, remarkTOC, remarkVis}//, remarkCitation, remarkTOC, remarkVis }