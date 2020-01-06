// LeetCode Problem #876 - https://leetcode.com/problems/middle-of-the-linked-list/

/**
 * @Time  - O(N)
 * @Space - O(N)
 */

class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

var middleNode = function(head) {

  let count = 0;
  let copy = head;

  while (head) {
    count += 1;
    head = head.next;
  }

  if (count % 2 === 1) count = Math.floor(count / 2);
  else count = Math.ceil(count / 2);

  while (count !== 0) {
    copy = copy.next;
    count -= 1;
  }
  return copy;
};

const ll = new Node(1);
ll.next = new Node(2);
ll.next.next = new Node(3);
ll.next.next.next = new Node(4);
ll.next.next.next.next = new Node(5);
ll.next.next.next.next.next = new Node(6);

console.log(middleNode(ll)); // 3 -> 4 -> 5