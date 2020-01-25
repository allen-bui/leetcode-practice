/**
 * @Time  - O(M * N) where M is rows and N is columns
 * @Space - O(M * N)
 */
var numIslands = function(grid) {

  // Check for edge cases
  if (grid === null || grid.length === 0) {
    return 0;
  }

  let numberOfIslands = 0;

  // Loop through each number and perform a DFS search
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[i].length; ++j) {
      if (grid[i][j] === '1') {
        numberOfIslands += dfs(grid, i, j);
      }
    }
  }
  return numberOfIslands;

  // Helper Functions
  //
  // The trick with DFS is to 'sink' each island once you visted, then perform DFS for top, bottom, left, and right
  // Once finished, to return 1 for the island since you're done traversing
  function dfs(grid, i, j) {
    if ( i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') {
      return 0;
    }
    grid[i][j] = '0';
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
    return 1;
  }
};

const grid = [
  ['1','1','1','1','0'],
  ['1','1','0','1','0'],
  ['1','1','0','0','0'],
  ['0','0','0','0','0'],
]; // 1

console.log(numIslands(grid));