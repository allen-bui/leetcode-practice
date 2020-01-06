// LeetCode Problem #921 - https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/

/**
 * @Time  - O(N)
 * @Space - O(1)
 */
var minAddToMakeValid = function(S) {

  let left = 0;
  let right = 0;

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

console.log(minAddToMakeValid('()))'));