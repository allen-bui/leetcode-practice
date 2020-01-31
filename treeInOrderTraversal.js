// In-Order Tree Traversal
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

var inOrderTraversal = function(root, arr = []) {
  // In-Order is Left, then Node, then Right
  if (root.left !== null) inOrderTraversal(root.left, arr);
  arr.push(root.value);
  if (root.right !== null) inOrderTraversal(root.right, arr);
  return arr;
};

console.log(inOrderTraversal(tree)); // [ 4, 2, 5, 1, 6, 3, 7 ]
