// Post-Order Tree Traversal
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

var postOrderTraversal = function(root, arr = []) {
  // Post-Order is Left, then Right, then Node
  if (root.left !== null) postOrderTraversal(root.left, arr);
  if (root.right !== null) postOrderTraversal(root.right, arr);
  arr.push(root.value);
  return arr;
};

console.log(postOrderTraversal(tree)); // [ 4, 5, 2, 6, 7, 3, 1 ]
