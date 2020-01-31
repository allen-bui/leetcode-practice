// Pre-Order Tree Traversal
/**
 * @Time -  O(N)
 * @Space - O(N)
 */

// define the class node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// construct the tree
const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.left = new Node(6);
tree.right.right = new Node(7);

var preorder = function(root, arr = []) {
  // Pre-Order is Node, then Left, then Right
  arr.push(root.value);
  if (root.left !== null) preorder(root.left, arr);
  if (root.right !== null) preorder(root.right, arr);
  return arr;
};

console.log(preorder(tree)); // [ 1, 2, 4, 5, 3, 6, 7 ]
