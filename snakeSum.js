function snakeSum(board, targetSum) {

  let validPaths = 0;

  for (let row = 0; row < board.length; ++row) {
    for (let col = 0; col < board[row].length; ++col) {
      validPaths += dfs(row, col, board, [], targetSum);
    }
  }
  return validPaths;
}

function dfs(row, col, board, currentPath = [], targetSum) {

  const currentSum = currentPath.reduce((a, b) => a + b, 0);
  if (currentSum === targetSum) {
    return 1;
  }

  if (
    row < 0
    || col < 0
    || row >= board.length
    || col >= board[row].length
    || board[row][col] === 0
    || currentSum > targetSum
  ) return 0;

  currentPath.push(board[row][col]);
  const temp = board[row][col];
  board[row][col] = 0;
  dfs(row + 1, col, board, currentPath, targetSum);
  dfs(row - 1, col, board, currentPath, targetSum);
  dfs(row, col + 1, board, currentPath, targetSum);
  dfs(row, col - 1, board, currentPath, targetSum);
  board[row][col] = temp;
}

const board = [
  [5, 2, 3, 4, 8],
  [1, 2, 7, 4, 1],
  [3, 8, 2, 9, 8],
  [7, 2, 4, 8, 1],
  [4, 6, 9, 3, 4],
];

console.log(snakeSum(board, 4)); // all results