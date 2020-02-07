// LeetCode Problem # 1031 - https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/

/**
 * @param {number[]} A
 * @param {number} L
 */
var maxSumTwoNoOverlap = function(A, L, M) {

  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < L; ++i) {
    currentSum += A[i];
  }

  for (let i = L - 1; i < A.length - 1; ++i) {
    currentSum = currentSum - A[i - L + 1] + A[i + 1];
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
};

console.log(maxSumTwoNoOverlap([5, 2, 8, 10, 7, 4], 2));
