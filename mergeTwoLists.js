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
var mergeTwoLists = function(l1, l2) {

  const res = new ListNode();
  const cur = res;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      res.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      res.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    res = res.next;
  }

  // It's possible that one linked list is shorter than the other so we just
  // add on the remainder of the last linked list. It's already sorted

  if (l1 !== null) res.next = l1;
  if (l2 !== null) res.next = l2;

  // return .next because this first element in the linkedlist is empty
  return cur.next;
};