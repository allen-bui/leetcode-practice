// LeetCode Problem #921 - https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/

/**
 * @Time  - O(N)
 * @Space - O(1)
 */
var minAddToMakeValid = function(S) {

  let left = 0;
  let right = 0;

  // loop through each element in string
  // if closing parenthesis, check left value
  // and decrement if left is greater than 1
  // otherwise keep incrementing
  for (const char of S) {
    if (char === ')') {
      if (left === 0) right += 1;
      else left -= 1;
    }
    else {
      left += 1;
    }
  }
  return left + right;
};

console.log(minAddToMakeValid('()))')); // 2