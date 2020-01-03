// Time Complexity - O(N log N) on Average, depends on pivot chosen
// Space Complexity - O(log N)

function swap(arr, leftIndex, rightIndex) {
  const temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}

function partition(arr, left, right, pivot) {

  // the first while loop makes sure we get every swap needed for partition
  while (left <= right) {
    // start pointers at each end of the array and
    // move towards pivot number, performing a swap when
    // the left side has a bigger number than pivot
    // and the right side has smaller number than pivot
    while (arr[left] < arr[pivot]) {
      left++;
    }
    while (arr[right] > arr[pivot]) {
      right--;
    }
    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  // return the left index so we know which pivot point to choose for recursion
  return left;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return;
  const pivot = Math.floor((left + right) / 2);
  const index = partition(arr, left, right, pivot);
  quickSort(arr, left, index - 1);
  quickSort(arr, index, right);
  return arr;
}

const unsortedArray = [5, 3, 7, 6, 2, 9];
console.log(quickSort(unsortedArray, 0, unsortedArray.length - 1)); // [2, 3, 5, 6, 7, 9]