// Time Complexity - O(N)
// Space Complexity - O(N)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function isLinkedListPalindrome(list) {

  // declare variables & stack
  const stack = [];
  let copy = list;

  // push all values into the stack
  while (list) {
    stack.push(list.value);
    list = list.next;
  }

  // pop values off one at a time, and make sure it equals the linked list values
  // set linked list to next value of linked list and continue until null
  while(copy) {
    if (copy.value !== stack.pop()) {
      return false;
    }
    copy = copy.next;
  }
  return true;
}

const ll = new Node(1);
ll.next = new Node(2);
ll.next.next = new Node(2);
ll.next.next.next = new Node(1);

console.log(isLinkedListPalindrome(ll)); // true
