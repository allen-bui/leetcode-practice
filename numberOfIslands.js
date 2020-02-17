/**
 * @Time  - O(M * N) where M is rows and N is columns
 * @Space - O(M * N)
 */
function numberOfIslands(board) {

  let numberOfIslands = 0;

  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[i].length; ++j) {
      if (board[i][j] === 1) {
        numberOfIslands += dfs(i, j, board);
      }
    }
  }
  return numberOfIslands;

  function dfs(i, j, board) {

    if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] === 0) {
      return 0;
    }
    board[i][j] = 0;
    dfs(i + 1, j, board);
    dfs(i - 1, j, board);
    dfs(i, j + 1, board);
    dfs(i, j - 1, board);
    return 1;
  }

}

const board = [
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 0, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 1, 0],
]

console.log(numberOfIslands(board)); // 3