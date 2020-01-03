// Time Complexity - O(N log N) on Average, depends on pivot chosen
// Space Complexity - O(log N)

function swap(arr, leftIndex, rightIndex) {
  const temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}

function partition(arr, left, right, pivot) {

  while (left <= right) {
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
console.log(quickSort(unsortedArray, 0, unsortedArray.length - 1));