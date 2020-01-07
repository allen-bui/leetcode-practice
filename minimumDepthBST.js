// LeetCode Problem #111 - https://leetcode.com/problems/minimum-depth-of-binary-tree/

/**
 * @Time  - O(N)
 * @Space - O(1)
 */
var minDepth = function(root) {

  if (!root) return 0;

  let depth = 1;
  let queue = [root];

  if (!root.left && !root.right) return depth;

  while (queue.length > 0) {

    let node = queue.shift();

    if (!node.left && !node.right) return depth;
    else {
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    depth += 1;
  }
  return depth;
};

