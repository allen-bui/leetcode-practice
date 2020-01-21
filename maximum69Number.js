// LeetCode Problem #1323 - https://leetcode.com/problems/maximum-69-number/

/**
 * @Time  - O(N)
 * @Space - O(N)
 */
var maximum69Number  = function(num) {

  // convert number to array
  // loop through nums
  // find the first six and replace it with a nine
  // return nums

  let stringNum = String(num).split('');

  for (let i = 0; i < stringNum.length; ++i) {
    if (stringNum[i] === '6') {
      stringNum[i] = '9';
      break;
    }
  }
  return Number(stringNum.join(''));
};

console.log(maximum69Number(9669));