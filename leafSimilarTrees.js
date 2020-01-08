// LeetCode Problem #872 - https://leetcode.com/problems/leaf-similar-trees/

/**
 * @Time  - O(N)
 * @Space - O(N)
 */
var leafSimilar = function(root1, root2) {

  // get leaf nodes for each tree
  const treeOneLeaves = findLeaves(root1);
  const treeTwoLeaves = findLeaves(root2);

  if (treeOneLeaves.length !== treeTwoLeaves.length) {
    return false;
  }

  // loop through leaf nodes and ensure the sequence is the same
  // otherwise return false
  for (let i = 0; i < treeOneLeaves.length; ++i) {
    if (treeOneLeaves[i] !== treeTwoLeaves[i]) {
      return false;
    }
  }
  return true;
};

// recursive helper function to find all the leaf nodes
// returns an array of leaf nodes
function findLeaves(root, result = []) {
  if (root.left === null && root.right === null) result.push(root.val);
  if (root.left !== null) findLeaves(root.left, result);
  if (root.right !== null) findLeaves(root.right, result);
  return result;
}
