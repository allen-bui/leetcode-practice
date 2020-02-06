// Time Complexity -  O(N)
// Space Complexity - O(N)

function inOrderTraverse(tree, array) {
  if (tree !== null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }
  return array;
}

function preOrderTraverse(tree, array) {
  if (tree !== null) {
    array.push(tree.value);
    inOrderTraverse(tree.left, array);
    inOrderTraverse(tree.right, array);
  }
  return array;
}

function postOrderTraverse(tree, array) {
  if (tree !== null) {
    inOrderTraverse(tree.left, array);
    inOrderTraverse(tree.right, array);
    array.push(tree.value);
  }
  return array;
}
