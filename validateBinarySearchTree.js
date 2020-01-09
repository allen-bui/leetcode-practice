// LeetCode Problem #98 - https://leetcode.com/problems/validate-binary-search-tree/

/**
 * @Time  - O(N)
 * @Space - O(1)
 */
var isValidBST = function(root) {
  if (!root) {
    return true;
  }
  return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

  function dfs(root, min, max) {
    if (!root){
      return true;
    }
    if (root.val <= min || root.val >= max) {
      return false;
    }
    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
  }
};

