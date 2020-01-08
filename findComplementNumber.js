// LeetCode Problem #476 - https://leetcode.com/problems/number-complement/

/**
 * @Time  - O(N)
 * @Space - O(1)
 */
var findComplement = function(num) {

  // convery number to binary
  const binaryNum = num.toString(2);
  let result = '';

  // loop through each binary number and add the inverse to result string
  for (const binaryDigit of binaryNum) {
    if (binaryDigit === '0') result += '1';
    else result += '0';
  }

  // return base 10 number of result
  return parseInt(result, 2);
};

console.log(findComplement(1000)); // 23