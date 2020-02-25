// LeetCode Problem # 79 - https://leetcode.com/problems/word-search/

/**
 * @Time  - O(N), where N is the number of letters in the grid
 * @Space - O(N), where N is the number of letters on the call stack for recursive calls
 */

function wordSearch(board, word) {
  for (let row = 0; row < board.length; ++row) {
    for (let col = 0; col < board[row].length; ++col) {
      if (word[0] === board[row][col] && dfs(row, col, 0, word, board)) {
        return true;
      }
    }
  }
  return false;
}

function dfs(row, col, count, word, board) {
  if (word.length === count) return true;
  if (row < 0
    || col < 0
    || row >= board.length
    || col >= board[row].length
    || word[count] !== board[row][col]
  ) return false;

  const temp = board[row][col];
  board[row][col] = '';
  const found = dfs(row + 1, col, count + 1, word, board)
    || dfs(row - 1, col, count + 1, word, board)
    || dfs(row, col + 1, count + 1, word, board)
    || dfs(row, col - 1, count + 1, word, board);
  board[row][col] = temp;
  return found;
}

const board = [
  ['A', 'A', 'H', 'A', 'A'],
  ['A', 'A', 'E', 'A', 'A'],
  ['A', 'A', 'L', 'L', 'A'],
  ['A', 'A', 'A', 'O', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
]

console.log(wordSearch(board, 'HELLO')); // true

