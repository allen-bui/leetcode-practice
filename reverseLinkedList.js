/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

  let prev = null;

  while (head) {

    const next = head.next;
    head.next = prev;
    prev = head;
    head = next;

  }
  return prev;

};

// Test in Terminal

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

const reverseLinkedList = (head) => {

  let prev = null;

  while (head) {

    const next = head.next;
    head.next = prev;
    prev = head;
    head = next;

  }
  return prev;
};

console.log(reverseLinkedList(ll));
