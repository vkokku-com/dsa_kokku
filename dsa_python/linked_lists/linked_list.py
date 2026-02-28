class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

def append(self, data):
    if self.head is None:
            self.head = Node(data)
            self.tail = self.head
            self.length = 1
            return
    current = self.head
    while current.next is not None:
        current = current.next
        self.length += 1

node1 = Node(3)
node2 = Node(5)
node3 = Node(7)
node4 = Node(11)
node5 = Node(13)
node6 = Node(17)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6

current_node = node1
while current_node.next:
    print(current_node.data, end='->')
    current_node = current_node.next
print('null')
