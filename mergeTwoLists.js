// Time Complexity - O(N + M)
// Space Complexity - O(N + M)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeLinkedList(listOne, listTwo) {

  let mergedList = new Node();
  let current = mergedList;

  while (listOne && listTwo) {
    if (listOne.value < listTwo.value) {
      mergedList.next = new Node(listOne.value);
      listOne = listOne.next;
    } else {
      mergedList.next = new Node(listTwo.value);
      listTwo = listTwo.next;
    }
    mergedList = mergedList.next;
  }

  if (listOne) mergedList.next = listOne;
  if (listTwo) mergedList.next = listTwo;

  return current.next;
}

const linkedListOne = new Node(1);
linkedListOne.next = new Node(3);
linkedListOne.next.next = new Node(5);

const linkedListTwo = new Node(2);
linkedListTwo.next = new Node(4);

console.log(mergeLinkedList(linkedListOne, linkedListTwo));
