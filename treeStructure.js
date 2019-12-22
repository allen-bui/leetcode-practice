class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const child = new Node(value);
    this.children.push(child);
  }

  preOrderTraversal(node = this, arr = []) {
    arr.push(node.value);
    for (let i = 0; i < node.children.length; ++i) {
      const child = node.children[i];
      this.preOrderTraversal(child, arr);
    }
    return arr;
  }

  postOrderTraversal(node = this, arr = []) {
    for (let i = 0; i < node.children.length; ++i) {
      const child = node.children[i];
      this.postOrderTraversal(child, arr);
    }
    arr.push(node.value);
    return arr;
  }
}

const tree = new Tree(1);
tree.addChild(2);
tree.addChild(3);
tree.addChild(4);
tree.children[0].children.push(new Node(5));
tree.children[0].children.push(new Node(6));
tree.children[1].children.push(new Node(7));
tree.children[1].children.push(new Node(8));
tree.children[2].children.push(new Node(9));
tree.children[2].children.push(new Node(10));

console.log(tree);
console.log(tree.preOrderTraversal());  // [1, 2, 5, 6, 3, 7, 8, 4, 9, 10]
console.log(tree.postOrderTraversal()); // [5, 6, 2, 7, 8, 3, 9, 10, 4, 1]
