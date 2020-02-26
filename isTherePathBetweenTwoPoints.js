/**
 *
 * @param {[][]} board
 * @param {[Row, Column]} coordinateA
 * @param {[Row, Column]} coordinateB
 *
 * Time -  O(N)
 * Space - O(N)
 */

function isTherePath(board, coordinateA, coordinateB) {
  if (dfs(board, coordinateA[0], coordinateA[1], coordinateB[0], coordinateB[1])) return true;
  return false;
}

// helper dfs function
function dfs(board, rowStart, colStart, rowEnd, colEnd) {

  if (rowStart < 0
    || colStart < 0
    || rowStart >= board.length
    || colStart >= board[rowStart].length
    || board[rowStart][colStart] === 0) return false;
  if (rowStart === rowEnd && colStart === colEnd) return true;

  board[rowStart][colStart] = 0;
  const isPathFound = dfs(board, rowStart + 1, colStart, rowEnd, colEnd)
    || dfs(board, rowStart - 1, colStart, rowEnd, colEnd)
    || dfs(board, rowStart, colStart + 1, rowEnd, colEnd)
    || dfs(board, rowStart, colStart - 1, rowEnd, colEnd)
  board[rowStart][colStart] = 1;
  return isPathFound;
}

const board = [
// C0  C1  C2  C3  C4
  [ 1,  1,  0,  1,  1], // R0
  [ 1,  0,  0,  0,  1], // R1
  [ 1,  1,  1,  1,  1], // R2
  [ 1,  0,  0,  0,  1], // R3
  [ 1,  1,  0,  1,  1], // R4
]

console.log(isTherePath(board, [4, 3], [1, 0])); // true