/**
 * @Time  - O(M * N) where M is rows and N is columns
 * @Space - O(M * N)
 */

function numberOfIslands(board) {

  let numberOfIslands = 0;

  for (let row = 0; row < board.length; ++row) {
    for (let col = 0; col < board[row].length; ++col) {
      if (board[row][col] === 1 && dfs(board, row, col)) {
        numberOfIslands += 1;
      }
    }
  }
  return numberOfIslands;
}

function dfs(board, row, col) {

  if (
    row < 0
    || col < 0
    || row >= board.length
    || col >= board[row].length
    || board[row][col] === 0
  ) return false;

  board[row][col] = 0;
  dfs(board, row + 1, col);
  dfs(board, row - 1, col);
  dfs(board, row, col + 1);
  dfs(board, row, col - 1);
  return 1;
}

const board = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0],
  [0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1],
];

console.log(numberOfIslands(board)); // 3