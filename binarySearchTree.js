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
      console.log(
        `[Error]: The value "${value}" is already inside binary search tree.`
      );
    }
  }

  search(value, root = this) {
    if (value === root.value) {
      return true;
    } else if (value < root.value) {
      return root.left === null ? false : this.search(value, root.left);
    } else {
      return root.right === null ? false : this.search(value, root.right);
    }
  }

  bfs() {

    const queue  = [];
    const result = [];
    queue.push(this);

    while (queue.length !== 0) {
      result.push(queue[0].value);
      if (queue[0].left !== null) queue.push(queue[0].left);
      if (queue[0].right !== null) queue.push(queue[0].right);
      queue.shift();
    }
    return result;
  }

  inOrderTraversal(root = this, result = []) {
    if (root.left !== null) {
      this.inOrderTraversal(root.left, result);
    }
    result.push(root.value);
    if (root.right !== null) {
      this.inOrderTraversal(root.right, result);
    }
    return result;
  }

  inOrderTraversalIterative() {

  }







}

const tree = new BinarySearchTree(5);
tree.add(3);
tree.add(2);
tree.add(4);
tree.add(7);
tree.add(6);
tree.add(8);

console.log(tree.inOrderTraversal()); // [2, 3, 4, 5, 6, 7, 8]