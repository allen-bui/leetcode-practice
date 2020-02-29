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
var addTwoNumbers = function(l1, l2) {

  let carry = 0;
  let sum = new ListNode();
  const current = sum;

  while (l1 && l2) {

      let currentSum = l1.val + l2.val + carry;
      carry = 0;
      if (currentSum >= 10) {
          currentSum = currentSum % 10;
          carry = 1;
      }
      sum.next = new ListNode(currentSum);
      sum = sum.next;
      l1 = l1.next;
      l2 = l2.next;
  }

  if (l1) {
    if (carry > 0) {
      sum.next = new ListNode(l1.val + carry);
      sum = sum.next;
    }
    sum.next = l1;
  }
  if (l1) {
    if (carry > 0) {
      sum.next = new ListNode(l1.val + carry);
      sum = sum.next;
    }
    sum.next = l1;
  }

  if (carry > 0) sum.next = new ListNode(1);
  if (l1) sum.next = l1;
  if (l2) sum.next = l2;

  return current.next;
};