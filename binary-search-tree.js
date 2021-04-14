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
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(11);
tree.insert(15);
tree.insert(9);
console.log(tree.lookup(10));
console.log(JSON.stringify(traverse(tree.root)));
// BinaryTree.insert(5);

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}