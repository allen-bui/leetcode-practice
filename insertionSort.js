// Time Complexity - O(N^2)
// Space Complexity - O(1)

function insertionSort(arr) {
  const length = arr.length;

  // loop through array, place element in correct position
  for (let i = 1; i < length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSort([4, 3, 2, 1])); // [1, 2, 3, 4]
