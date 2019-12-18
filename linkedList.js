class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {

    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    }
    else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }
}

const ll = new SinglyLinkedList();

ll.push(5);
ll.push(2);
ll.push(3);

console.log(ll);