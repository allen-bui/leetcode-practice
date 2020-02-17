function isTherePath(board) {

  if (dfs(board, 0, 0)) return true;
  else return false;

  function dfs(board, row, col) {

    // Checks bounds and our current position
    if (
      row < 0 ||
      row >= board.length ||
      col < 0 ||
      col >= board[row].length ||
      board[row][col] === 0
    ) {
      return false;
    }

    // Checks the end exist and makes sure row and col is at the end
    if (
      board[board.length - 1][board[row].length - 1] === 1 &&
      row === board.length - 1 &&
      col === board[row].length - 1
    ) {
      return true;
    }

    // Sinks current position to '0' to mark as visited
    board[row][col] = 0;

    // Continue path in all directions
    const found =
      dfs(board, row + 1, col) ||
      dfs(board, row - 1, col) ||
      dfs(board, row, col + 1) ||
      dfs(board, row, col - 1);
    board[row][col] === 1;
    return found;
  }
}

const board = [
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1]
];

console.log(isTherePath(board)); // true;
