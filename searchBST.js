// Time Complexity -  O(log N)
// Space Complexity - O(1)

var searchBST = function(root, val) {
  while (root) {
      if (root.val === val) return root;
      root = root.val > val ? root.left : root.right;
  }
  return null;
};