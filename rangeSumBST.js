// Time Complexity  - O(log n)
// Space Complexity - O(1)

let sum;

var rangeSumBST = function(root, L, R) {
  sum = 0;
  helper(root, L, R);
  return sum;
};

function helper(root, L, R) {
  if (!root) {
    return 0;
  }
  if (root.val >= L && root.val <= R) {
    sum += root.val;
  }
  if (root.val > L) {
    helper(root.left, L, R);
  }
  if (root.val < R) {
    helper(root.right, L, R);
  }
}