// LeetCode Problem # 79 - https://leetcode.com/problems/word-search/

/**
 * @Time  - O(N), where N is the number of letters in the grid
 * @Space - O(N), where N is the number of letters on the call stack for recursive calls
 */

function wordSearch(board, word) {

  for (let row = 0; row < board.length; ++row) {
    for (let col = 0; col < board[row].length; ++col) {
      if (word[0] === board[row][col] && dfs(board, row, col, 0, word)) {
        return true;
      }
    }
  }
  return false;
}

function dfs(board, row, col, count, word) {

  if (word.length === count) return true;
  if (
    row < 0
    || col < 0
    || row >= board.length
    || col >= board[row].length
    || board[row][col] !== word[count]
  ) return false;

  const temp = board[row][col];
  board[row][col] = null;
  const found = dfs(board, row + 1, col, count + 1, word)
  || dfs(board, row - 1, col, count + 1, word)
  || dfs(board, row, col + 1, count + 1, word)
  || dfs(board, row, col - 1, count + 1, word);
  board[row][col] = temp;
  return found;
}

const board = [
  ['A', 'A', 'H', 'A', 'A'],
  ['A', 'A', 'E', 'A', 'A'],
  ['A', 'A', 'L', 'A', 'A'],
  ['A', 'A', 'L', 'A', 'A'],
  ['A', 'A', 'O', 'A', 'A'],
];

console.log(wordSearch(board, 'HELLO')); // true
