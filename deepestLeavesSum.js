/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root, level = 1) {

  /*
  Pseudocode
  **********
  1. Set base case to return 0 if there are no more nodes
  2. Use an array to store the current sum
  3. Use DFS to traverse down the tree and store the sum at each level
  4. Return the last element in the array
  */

  // 1
  if (!root) return 0;

  // 2
  const cache = [];

  // 3
  getSumByLevel(root);

  // 4
  return cache[cache.length - 1];

  // helper function
  function getSumByLevel(root, depth = 0) {
    if (!root) return 0;
    cache[depth] = (cache[depth] || 0) + root.val;
    getSumByLevel(root.left, depth + 1);
    getSumByLevel(root.right, depth + 1);
  }
};