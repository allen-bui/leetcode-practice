// LeetCode Problem # 977 - https://leetcode.com/problems/squares-of-a-sorted-array/

/**
 *
 * @Time  - O(N)
 * @Space - O(N)
 */

var sortedSquares = function(A) {

  if (A.length < 2) {
    return [Math.pow(A[0], 2)];
  } else {

    const result = [];
    let left = 0;
    let right = A.length - 1;

    while (left <= right) {

      const leftSquare = Math.pow(A[left], 2);
      const rightSquare = Math.pow(A[right], 2);

      if (leftSquare <= rightSquare) {
        result.unshift(rightSquare);
        right -= 1;
      } else {
        result.unshift(leftSquare);
        left += 1;
      }
    }
    return result;
  }
};