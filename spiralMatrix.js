// LeetCode Problem # 54 - // https://leetcode.com/problems/spiral-matrix/

var spiralOrder = function(matrix) {

  const result = [];

  if (matrix === null || matrix.length === 0) {
    return result;
  }

  let rowBegin = 0;
  let rowEnd = matrix.length - 1;
  let colBegin = 0;
  let colEnd = matrix[0].length - 1;

  while (colBegin <= colEnd && rowBegin <= rowEnd) {

    for (let i = colBegin; i <= colEnd; ++i) {
      result.push(matrix[rowBegin][i]);
    }
    rowBegin++;

    for (let i = rowBegin; i < rowEnd; ++i) {
      result.push(matrix[i][colEnd]);
    }
    colEnd--;

    if (rowBegin <= rowEnd) {
      for (let i = colEnd; i >= colBegin; --i) {
        result.push(matrix[rowEnd][i]);
      }
    }
    rowEnd--;

    if (colBegin <= colEnd) {
      for (let i = rowEnd; i >= rowBegin; --i) {
        result.push(matrix[i][colBegin]);
      }
    }
    colBegin++;
  }
  return result;
};

const matrix = [
  [1,   2,  3,  4,  5],
  [6,   7,  8,  9, 10],
  [11, 12, 13, 14, 15],
];

console.log(spiralOrder(matrix)); // [ 1, 2, 3, 4, 5, 10, 14, 13, 12, 11, 6, 7, 8, 9 ]
