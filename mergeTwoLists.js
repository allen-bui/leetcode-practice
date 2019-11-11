/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

var mergeTwoLists = function(l1, l2) {
  let res = new Node();
  let current = res;

  while (l1 && l2) {
    if (l1.value < l2.value) {
      res.next = new Node(l1.value);
      l1 = l1.next;
    } else {
      res.next = new Node(l2.value);
      l2 = l2.next;
    }
    res = res.next;
  }

  if (l1) res.next = l1;
  if (l2) res.next = l2;

  return current.next;
};
