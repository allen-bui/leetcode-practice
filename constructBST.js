class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // create new node for new value & insert value
    const newNode = new Node(value);
    traverse(this);

    // helper function to traverse tree on where we need to place new node
    function traverse(node) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          traverse(node.left);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          traverse(node.right);
        }
      }
    }
    traverse(this);
  }

  contains(value) {
    // Write your code here.
  }

  remove(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    return this;
  }
}

// Do not edit the line below.
exports.BST = BST;
