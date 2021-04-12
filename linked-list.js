
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    traverseToIndex(index) {
        let currentNode = this.head;
        for (let i = 0; i < index - 1; i++) {
            if (!currentNode.next) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    insert(index, value) {
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        } else {
            const currentNode = this.traverseToIndex(index);
            const newNode = new Node(value);
            newNode.next = currentNode.next;
            currentNode.next = newNode;
            return this.printList();
        }

    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(13);
myLinkedList.insert(44, 99);
console.log(myLinkedList.printList());