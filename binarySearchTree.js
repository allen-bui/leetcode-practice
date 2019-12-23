class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(value, root = this) {
    const node = new Node(value);

    if (node.value < root.value) {
      root.left === null ? (root.left = node) : this.add(value, root.left);
    } else if (node.value > root.value) {
      root.right === null ? (root.right = node) : this.add(value, root.right);
    } else {
      console.log(`[Error]: The value "${value}" is already inside binary search tree.`);
    }
  }
}

const tree = new BinarySearchTree(5);
tree.add(3);
tree.add(2);
tree.add(4);
tree.add(7);
tree.add(6);
tree.add(8);

console.log(tree);