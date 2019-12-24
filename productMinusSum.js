// Time Complexity  - O(N)
// Space Complexity - O(N)

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {

  let product = 1;
  let sum = 0;
  let stringN = String(n);

  for (const number of stringN) {
    product *= (number - 0);
    sum += (number - 0);
  }
  return product - sum;
};