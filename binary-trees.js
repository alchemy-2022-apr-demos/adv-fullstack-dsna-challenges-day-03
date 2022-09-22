const data = [
    4,
    0,
    3,
    1,
    6,
    2,
    9,
    5,
    8,
]

const binaryTreeRoot = {
    data: -1,
    left: null,
    right: null,
}

const addToBinaryTree = (node, data) => {
    if(node.data === data) {
        node.data = data
    } else if (node.data < data) {
        if(node.left == null) {
            node.left = {
                data,
                left: null,
                right: null,
            }
        } else {
            addToBinaryTree(node.left, data)
        }
    } else {
        if (node.right == null) {
            node.right = {
                data,
                left: null,
                right: null,
            }
        } else {
            addToBinaryTree(node.right, data)
        }
    }
}

data.forEach(d => addToBinaryTree(binaryTreeRoot, d))

console.log(binaryTreeRoot)