class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const node1 = new Node(3);
const node2 = new Node(5);
const node3 = new Node(7);
const node4 = new Node(11);
const node5 = new Node(13);
const node6 = new Node(17);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

let currentNode = node1;

while(currentNode && currentNode.data) {
    console.log(currentNode.data, '->');
    currentNode = currentNode.next;
}
console.log(null);