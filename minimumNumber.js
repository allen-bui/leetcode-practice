// Time Complexity  - O(N)
// Space Complexity - O(1)

/**
 * @param {number[]} A
 * @return {number}
 */
var sumOfDigits = function(A) {

  const min = Math.min(...A) + '';
  let sum = 0;

  for (let i = 0; i < min.length; ++i) {
    sum += min[i] - 0;
  }

  return sum % 2 === 0 ? 1 : 0;
};