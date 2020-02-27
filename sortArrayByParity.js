// LeetCode Problem # 922 - https://leetcode.com/problems/sort-array-by-parity-ii/

/**
 * @Time  - O(N)
 * @Space - O(1)
 */
var sortArrayByParityII = function(A) {

  const result = [];
  let even = 0;
  let odd = 1;

  for (let i = 0; i < A.length; ++i) {
    if (A[i] % 2 === 0) {
      result[even] = A[i];
      even += 2;
    } else {
      result[odd] = A[i];
      odd += 2;
    }
  }
  return result;
};

const arr = [4, 2, 5, 7];
console.log(sortArrayByParityII(arr)); // [4, 5, 2, 7]

