class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const ll = new Node(1);
ll.next = new Node(2);
ll.next.next = new Node(3);
ll.next.next.next = new Node(4);

function removeElement(head, value) {

  // housekeeping
  if (head === null) return head;

  // declare new node
  let result = new Node();
  let current = result;
  result.next = head;

  // loop through current, if value matches, set the next next node and continue traversing
  while (current.next !== null) {

    if (current.next.value === value) {
      current.next = current.next.next;
    }
    else {
      current = current.next;
    }
  }
  return result.next;
}

removeElement(ll, 3); // 1 -> 2 -> 4