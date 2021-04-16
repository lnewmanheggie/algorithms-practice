class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    // go left
                    // if there is no left node then insert the new node there
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    // otherwise the current keep going down the tree
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return false;
        }
        if (this.root.value === value) {
            return true;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        return false;
                    }
                    if (currentNode.value === value) {
                        return true;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        return false;
                    }
                    if (currentNode.value === value) {
                        return true;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    bfs() {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        // queue starts with the root node
        queue.push(currentNode);

        // go until all items in the queue have been pushed out
        while (queue.length > 0) {
            // take out an item from the beginning of the queue - this is the node that will be looked at
            currentNode = queue.shift();
            // put that node in the list of nodes
            list.push(currentNode.value);
            // if current node has a left child, put that in the queue
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            // if current node has a right child, put that in the queue
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
    }

    dfsInorder() {
        return traverseInOrder(this.root, []);
    }

    dfsPostorder() {
        return traversePostOrder(this.root, []);
    }

    dfsPreorder() {
        return traversePreOrder(this.root, []);
    }
}

function traverseInOrder(node, list) {
    if (node.left) {
        traverseInOrder(node.left, list);
    }
    list.push(node.value);

    if (node.right) {
        traverseInOrder(node.right, list);
    }
    return list;
}

function traversePostOrder(node, list) {
    if (node.left) {
        traversePostOrder(node.left, list);
    }
    if (node.right) {
        traversePostOrder(node.right, list);
    }
    list.push(node.value);
    return list;
}

function traversePreOrder(node, list) {
    list.push(node.value);
    if (node.left) {
        traversePreOrder(node.left, list);
    }
    if (node.right) {
        traversePreOrder(node.right, list);
    }
    return list;
}


const tree = new BinaryTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(tree.bfs());
console.log(tree.dfsPostorder());
// console.log(tree.lookup(10));
// console.log(JSON.stringify(traverse(tree.root)));
// BinaryTree.insert(5);

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}