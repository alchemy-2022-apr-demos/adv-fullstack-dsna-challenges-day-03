// Trees

// const parent = {
//     data: htmlTag,
//     children: [
//         {
//             data: headTag,
//             children: [
//                 {
//                     data: linkTag1,
//                     children: [],
//                 },
//                 {
//                     data: linkTag2,
//                     children: [],
//                 },
//             ],
//         }
//     ],
// }

const parentWithNumbers = {
    id: 0,
    children: [
        {
            id: 1,
            children: [
                {
                    id: 2,
                    children: [],
                },
                {
                    id: 3,
                    children: [],
                },
                parentWithNumbers,
            ],
        }
    ],
}

parentWithNumbers.children[0].children.push(parentWithNumbers)

// const findInTree = (node, id) => {
//     // console.log('node', node, 'id', id)
//     if(node.id === id) {
//         return node
//     } else {
//         for(let i = 0; i < node.children.length; ++i) {
//             const child = node.children[i]
//             const found = findInTree(child, id)
//             if(found) {
//                 // console.log('found child', found)
//                 return found
//             }
//         }
//         return null
//     }
// }

const findInTree = (node, id) => {
    if(node.id === id) {
        return node
    } else {
        for(let i = 0; i < node.children.length; ++i) {
            const child = node.children[i]
            const found = findInTree(child, id)
            if(found) {
                return found
            }
        }
        return null
    }
}

const foundNode = findInTree(parentWithNumbers, 4)
console.log(foundNode)