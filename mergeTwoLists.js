// Time Complexity - O(N + M)
// Space Complexity - O(N + M)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeSortedList(listOne, listTwo) {

  // declare variables
  let merge = new Node();
  let current = merge;

  while (listOne && listTwo) {
    if (listOne.value < listTwo.value) {
      merge.next = new Node(listOne.value);
      listOne = listOne.next;
    } else {
      merge.next = new Node(listTwo.value);
      listTwo = listTwo.next;
    }
    merge = merge.next;
  }

  // check remaining list
  if (listOne) merge.next = listOne;
  if (listTwo) merge.next = listTwo;

  // return result;
  return current.next;
}

const llOne = new Node(1);
llOne.next = new Node(4);

const llTwo = new Node(2);
llTwo.next = new Node(3);
llTwo.next.next = new Node(5);

console.log(mergeSortedList(llOne, llTwo)); // 1 -> 2 -> 3 -> 4 -> 5
