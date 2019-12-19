// Time Complexity  - O(N^2)
// Space Complexity - O(1)

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([4, 2, 3, 10, 1, 200])); // [ 1, 2, 3, 4, 10, 200 ]
