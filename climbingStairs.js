/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const arr = [1, 2, 3];

  for (let i = 3; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n - 1];
};
