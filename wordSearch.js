// LeetCode Problem # 79 - https://leetcode.com/problems/word-search/

/**
 * @Time  - O(N), where N is the number of letters in the grid
 * @Space - O(N), where N is the number of letters on the call stack for recursive calls
 */

function wordSearch(board, word) {

  for (let row = 0; row < board.length; ++row) {
    for (let col = 0; col < board[row].length; ++col) {
      if (board[row][col] === word[0] && dfs(row, col, 0, word, board)) {
        return true;
      }
    }
  }
  return false;

  // helper dfs function
  function dfs(row, col, count, word, board) {

    if (count === word.length) return true;
    if (row < 0 || col < 0 || row >= board.length || col >= board[row].length || board[row][col] !== word[count]) {
      return false;
    }
    const temp = board[row][col];
    board[row][col] = null;
    const found =
      dfs(row + 1, col, count + 1, word, board)
      || dfs(row - 1, col, count + 1, word, board)
      || dfs(row, col + 1, count + 1, word, board)
      || dfs(row, col - 1, count + 1, word, board);
    board[row][col] = temp;
    return found;
  }
}

const board = [
  ['B', 'I', 'B', 'S', 'A'],
  ['O', 'L', 'L', 'I', 'E'],
  ['O', 'O', 'C', 'S', 'I'],
  ['L', 'Y', 'A', 'Y', 'L'],
  ['P', 'E', 'E', 'V', 'O'],
]

console.log(wordSearch(board, 'BIBS')); // true
console.log(wordSearch(board, 'OLLIEISCOOLYAY')); // true
