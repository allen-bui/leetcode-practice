// Time Complexity - O(N + M)
// Space Complexity - O(N + M)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeSortedLists(listOne, listTwo) {

  let mergeSortedLists = new Node();
  let current = mergeSortedLists;

  while (listOne && listTwo) {

    if (listOne.value < listTwo.value) {
      mergeSortedLists.next = new Node(listOne.value);
      listOne = listOne.next;
    } else {
      mergeSortedLists.next = new Node(listTwo.value);
      listTwo = listTwo.next;
    }
    mergeSortedLists = mergeSortedLists.next;
  }

  if (listOne) mergeSortedLists.next = listOne;
  if (listTwo) mergeSortedLists.next = listTwo;

  return current.next;
}

const linkedListOne = new Node(1);
linkedListOne.next = new Node(3);

const linkedListTwo = new Node(2);
linkedListTwo.next = new Node(4);
linkedListTwo.next.next = new Node(5);

console.log(mergeSortedLists(linkedListOne, linkedListTwo)); // 1 -> 2 -> 3 -> 4 -> 5