// LeetCode Problem # 258 - https://leetcode.com/problems/add-digits/

/**
 * @Time  - O(N)
 * @Space - O(N)
 */
var addDigits = function(num) {

  const stringNum = String(num);

  if (stringNum.length === 1) {
      return stringNum - 0;
  }

  const newDigit = stringNum
      .split('')
      .reduce((a, b) => Number(a) + Number(b));

  return addDigits(newDigit);
};