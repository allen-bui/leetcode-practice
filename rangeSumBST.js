// Time Complexity  - O(log n)
// Space Complexity - O(1)

var rangeSumBST = function(root, L, R) {

  /*
  Pseudocode
  ----------
  1. initiate a sum variable
  2. traverse tree and make sure each node visited is greater/equal than left or less/equal than right
  3. if true, then add to sum variable
  3. return sum
  */

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