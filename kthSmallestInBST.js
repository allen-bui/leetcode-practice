// LeetCode Problem # 230 - https://leetcode.com/problems/kth-smallest-element-in-a-bst

/**
 * @Time  - O(N)
 * @Space - O(N)
 */

function kthSmallest(root, k) {

  /*
  Pseudocode
  ----------
  1. Create an array data structure
  2. Perform in order traversal
  3. Return the kth index minus one
  */

  const result = [];
  inOrderTraversal(root);
  return result[k - 1];

  function inOrderTraversal(root) {
    if (!root) {
      return;
    }
    if (root.left !== null) {
      inOrderTraversal(root.left);
    }
    result.push(root.value);
    if (root.right !== null) {
      inOrderTraversal(root.right);
    }
  }
};

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree = new Node(7);
tree.left = new Node(5);
tree.right = new Node(9);
tree.left.left = new Node(3);
tree.left.right = new Node(6);

console.log(kthSmallest(tree, 3));