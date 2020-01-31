// Breadth First Search (BFS) Tree Traversal
/**
 * @Time -  O(N)
 * @Space - O(N)
 */

// Define the class node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Construct the tree
const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.left = new Node(6);
tree.right.right = new Node(7);

var breadthFirstSearch = function(root) {

  /**
   * 1. Use a queue and pop elements off the queue
   * 2. If popped element has children, then push into queue
   * 3. Return result array
   */
  const result = [];
  const queue = [];
  queue.push(root);

  while(queue.length) {
    const currentNode = queue.shift();
    result.push(currentNode.value);
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }
  return result;
};

console.log(breadthFirstSearch(tree)); // [ 1, 2, 3, 4, 5, 6, 7 ]
