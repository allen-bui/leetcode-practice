// Pre-Order Tree Traversal
//
//     1
//   2  3
//  4 5 6 7

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.left = new Node(6);
tree.right.right = new Node(7);

var preorder = function(root, arr = []) {
  arr.push(root.value);
  if (root.left !== null) preorder(root.left, arr);
  if (root.right !== null) preorder(root.right, arr);
  return arr;
};

console.log(preorder(tree)); // [ 1, 2, 4, 5, 3, 6, 7 ]
