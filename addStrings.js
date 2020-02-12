// LeetCode Problem # 415 - https://leetcode.com/problems/add-strings/

/**
 * @Time  - O(N + M) where N and M are the sizes of the input
 * @Space - O(N || M) depending on which is longer, and plus one if the carry > 0
 */
var addStrings = function(num1, num2) {

  let result = '';
  let carry = 0;
  let pointerOne = num1.length - 1;
  let pointerTwo = num2.length - 1;

  while (pointerOne >= 0 || pointerTwo >= 0) {

    let sum = carry;

    if (pointerOne >= 0) {
      sum += num1[pointerOne] - '0';
      pointerOne -= 1;
    }
    if (pointerTwo >= 0) {
      sum += num2[pointerTwo] - '0';
      pointerTwo -= 1;
    }
    result += (sum % 10);
    carry = Math.floor(sum / 10);
  }
  if (carry !== 0 ) result += carry;
  return result.split('').reverse().join('');
};

console.log(addStrings('123', '123'));