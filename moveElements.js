// Time Complexity: O(N)
// Space Complexity: O(1)

function moveElementToEnd(array, toMove) {

  // define variables
  let left = 0;
  let right = array.length - 1;
  let swapHold;

  // move right element until it doesn't equal the 'toMove' element
  // swap left and right, then increment the left element up
  while (left < right) {
    while (array[right] === toMove) {
      right--;
    }
    if (array[left] === toMove) {
      swapHold = array[right];
      array[right] = array[left];
      array[left] = swapHold;
    }
    left++;
  }
  return array;
}

console.log(moveElementToEnd([1, 2, 3, 2, 3], 2)); // [1 3 3 2 2]
