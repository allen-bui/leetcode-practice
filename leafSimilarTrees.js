// LeetCode Problem #872 - https://leetcode.com/problems/leaf-similar-trees/

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {

  const treeOneLeaves = findLeaves(root1);
  const treeTwoLeaves = findLeaves(root2);

  if (treeOneLeaves.length !== treeTwoLeaves.length) {
    return false;
  }

  for (let i = 0; i < treeOneLeaves.length; ++i) {
    if (treeOneLeaves[i] !== treeTwoLeaves[i]) {
      return false;
    }
  }
  return true;
};

function findLeaves(root, result = []) {

  if (root.left === null && root.right === null) {
    result.push(root.val);
  };

  if (root.left !== null) {
    findLeaves(root.left, result);
  }

  if (root.right !== null) {
    findLeaves(root.right, result);
  }
  return result;
}

console.log(findLeaves(node));