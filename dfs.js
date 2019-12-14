class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  dfs(array) {
    array.push(this.name);

    for (let i = 0; i < this.children.length; i++) {
      this.children[i].dfs(array);
    }
    return array;
  }
}

const node = new Node("one");

node.addChild("two");
node.addChild("three");

node.children[0].addChild("four");
node.children[1].addChild("five");

console.log(node.dfs([])); // ['one', 'two', 'three', 'four', 'five]
