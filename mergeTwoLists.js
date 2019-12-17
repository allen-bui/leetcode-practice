class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeSortedList(listOne, listTwo) {

  let sortedList = new Node();
  let current = sortedList;

  while (listOne !== null && listTwo !== null) {

    if (listOne.value < listTwo.value) {
      sortedList.next = new Node(listOne.value);
      listOne = listOne.next;
    } else {
      sortedList.next = new Node(listTwo.value);
      listTwo = listTwo.next;
    }
    sortedList = sortedList.next;
  }

  if (listOne !== null) sortedList.next = listOne;
  if (listTwo !== null) sortedList.next = listTwo;

  return current.next;
}

const linkedListOne = new Node(5);
linkedListOne.next = new Node(6);
linkedListOne.next.next = new Node(10);

const linkedListTwo = new Node(2);
linkedListTwo.next = new Node(4);
linkedListTwo.next.next = new Node(7);
linkedListTwo.next.next.next = new Node(11);

console.log(mergeSortedList(linkedListOne, linkedListTwo)); // 2 -> 4 -> 5 -> 6 -> 7 -> 10 -> 11