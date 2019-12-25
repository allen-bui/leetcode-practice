class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const ll = new Node(1);
ll.next = new Node(1);
ll.next.next = new Node(2);
ll.next.next.next = new Node(3);

var deleteDuplicates = function(head) {

  let next = head.next;
  let prev = head;

  while (next) {
    if (next.value !== prev.value) {
      prev.next = next;
      prev = next;
    }
    next = next.next;
  }
  prev.next = null;
  return head;
};

console.log(deleteDuplicates(ll));
