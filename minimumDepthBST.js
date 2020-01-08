// LeetCode Problem #111 - https://leetcode.com/problems/minimum-depth-of-binary-tree/

/**
 * @Time  - O(N)
 * @Space - O(1)
 */
var minDepth = function(root) {

  // if there is no root, return 0
  if (!root) return 0;

  // declare initial depth and put root node into queue
  let depth = 1;
  let queue = [root];

  // if left and right are null, return depth
  if (!root.left && !root.right) return depth;

  // while the queue is not empty, dequeue and add left & right nodes into the queue
  while (queue.length > 0) {

    let queueLength = queue.length;

    for (let i = 0; i < queueLength; ++i) {
      let node = queue.shift();
      if (!node.left && !node.right) return depth;
      else {
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
    depth += 1;
  }
  return depth;
};

