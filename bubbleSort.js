// Time Complexity  - O(N)
// Space Complexity - O(1)

// loop through and check adjacent values, swap if left value is greater than right
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([4, 2, 3, 10, 1, 200])); // [ 1, 2, 3, 4, 10, 200 ]
