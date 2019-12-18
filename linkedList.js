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

    // declare new variable
    const node = new Node(value);

    // if head is null, then set head and tail to same node
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    }
    // otherwise assign the next tail value to new node and update
    // tail to new node
    else {
      this.tail.next = node;
      this.tail = node;
    }
    // add to length to keep track
    this.length += 1;
    return this;
  }

  pop() {

    if (this.head === null) {
      return undefined;
    }

    // declare variables
    let current = this.head;
    let newTail = current;

    // keep looping until we hit the end of our linked list
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    // assign new tail and set the next value to null
    this.tail = newTail;
    this.tail.next = null;

    // adjust length
    this.length -= 1;

    // reset head and tail to null if length is 0
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current.value;
  }

  shift() {

    // keep old head to return value, set head to head.next
    const oldHead = this.head;
    this.head = this.head.next;

    // update length, if 0, then reset tail since head will already be null
    this.length -= 1;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead.value;
  }

  unshift(value) {

    const newNode = new Node(value);

    // checks to see if head is null, assign head and tail to new node if true
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    // set the new node's next to current head, then change current head to new node
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }
}

const ll = new SinglyLinkedList();

ll.push(5);
ll.push(2);
ll.push(3);
console.log(ll.pop()); // 3
console.log(ll.shift()); // 5
ll.unshift(10); // 10 -> 2
console.log(ll);

