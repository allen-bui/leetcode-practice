// LeetCode Problem # 54 - // https://leetcode.com/problems/spiral-matrix/

/**
 * @Time  -
 * @Space -
 */
var spiralOrder = function(matrix) {

  // create a result array
  // have x and y coordinates
  // traverse right increasing x to length minus one
  // traverse down by decreasing y to length minus one
  // traverse left by decreasing x to length minus one
  // traverse up by increasing y to length minus one
  // repeat until spiral is no more
  // return result array

};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]
