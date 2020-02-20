/**
 *
 * @Time  - O(N), where N is the number of points on the grid
 * @Space - O(N), where N is the number of items on the call stack
 */

function isTherePath(board) {
  if (dfs(board, 0, 0)) return true;
  return false;
}

// helper dfs function
function dfs(board, row, col) {
  if (row < 0 || col < 0 || row >= board.length || col >= board[row].length || board[row][col] === 0) return false;
  if (row === board.length - 1 && col === board[row].length - 1) return true;
  board[row][col] = 0;
  const isPathFound = dfs(board, row + 1, col)
    || dfs(board, row - 1, col)
    || dfs(board, row, col + 1)
    || dfs(board, row, col - 1)
  board[row][col] = 1;
  return isPathFound;
}

const board = [
  [1, 1, 1, 1, 1],
  [0, 1, 0, 0, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0],
  [1, 1, 1, 1, 0],
]

console.log(isTherePath(board)); // true