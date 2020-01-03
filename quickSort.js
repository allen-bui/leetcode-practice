function swap(arr, leftIndex, rightIndex) {
  const temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}

function partition(arr, left, right) {

  const pivot = arr[Math.floor((left + right) / 2)];
  const i = left;
  const j = right;

  while (i <= j) {
    while(arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
}