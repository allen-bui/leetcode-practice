// LeetCode Problem # 463 - https://leetcode.com/problems/island-perimeter

/**
 * @Time  - O(N^2)
 * @Space - O(1)
 */

function islandPerimeter(grid) {

  const rows = grid.length;
  const cols = grid[0].length;
  let perimeter = 0;

  for (let row = 0; row < rows; ++row) {
    for (let col = 0; col < cols; ++col) {
      if (!grid[row][col]) continue;
      perimeter += 4;

      // check for squares in all directions, and abstract from total if a square exist
      if (row > 0 && grid[row - 1][col]) perimeter--;
      if (col > 0 && grid[row][col - 1]) perimeter--;
      if (row < rows - 1 && grid[row + 1][col]) perimeter--;
      if (col < cols - 1 && grid[row][col + 1]) perimeter--;
    }
  }
  return perimeter;
}