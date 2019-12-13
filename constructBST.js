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
  }

  contains(value) {
    return search(this);

    function search(node) {
      if (value === node.value) {
        return true;
      } else if (value < node.value) {
        if (node.left !== null) {
          return search(node.left);
        } else {
          return false;
        }
      } else if (value > node.value) {
        if (node.right !== null) {
          return search(node.right);
        } else {
          return false;
        }
      }
    }
  }
}

const tree = new BinarySearchTree(5);

tree.insert(6);
tree.insert(7);

console.log(tree.contains(8)); // false
