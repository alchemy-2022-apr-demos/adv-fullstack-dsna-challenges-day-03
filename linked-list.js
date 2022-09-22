const node1 = {
    data: 'foo',
    next: null,
}

const addNode = (startingNode, data) => {
    startingNode.next = {
        data,
        prev: null,
    }
    return startingNode
}

console.log(addNode(node1, 'bar'))
console.log(addNode(node1, 'bar'))

const doubleNode = {
    data: { },
    prev: a,
    next: b,
}
