// Time Complexity  - O(N)
// Space Complexity - O(1)

var getDecimalValue = function(head) {

  let str = '';

  while (head) {
      str += head.val;
      head = head.next;
  }
  return parseInt(str, 2);
};