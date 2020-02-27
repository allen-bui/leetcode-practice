// LeetCode Problem # 922 - https://leetcode.com/problems/sort-array-by-parity-ii/

/**
 * @Time  - O(N)
 * @Space - O(N)
 */
var sortArrayByParityII = function(A) {

  const odds = [];
  const evens = [];
  const results = [];

  for (let i = 0; i < A.length; ++i) {
    if (A[i] % 2 === 0) evens.push(A[i]);
    else odds.push(A[i]);
  }

  for (let i = 0; i < odds.length; ++i) {
    results.push(evens[i]);
    results.push(odds[i]);
  }
  return results;
};

const arr = [4, 2, 5, 7];
console.log(sortArrayByParityII(arr)); // [4, 5, 2, 7]