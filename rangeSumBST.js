// Time Complexity  - O(log n)
// Space Complexity - O(1)

var rangeSumBST = function(root, L, R) {

  let sum = 0;
  traverse(root);
  return sum;

  // helper function to traverse tree and check node value
  function traverse(root) {
    if (root.val >= L && root.val <= R) sum += root.val;
    if (root.left !== null) traverse(root.left);
    if (root.right !== null) traverse(root.right);
  }
};