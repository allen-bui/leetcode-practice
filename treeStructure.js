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
}

const tree = new Tree(1);
tree.addChild(2);
tree.addChild(3);
tree.addChild(4);
tree.children[0].children = new Node(5);
tree.children[0].children = new Node(6);
tree.children[1].children = new Node(7);
tree.children[1].children = new Node(8);
tree.children[2].children = new Node(9);
tree.children[2].children = new Node(10);

console.log(tree);
