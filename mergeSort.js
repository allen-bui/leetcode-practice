function mergeSort(list) {

  if (list.length <= 1) {
    return list;
  }

  const middle = Math.floor(list.length / 2);
  const left = list.slice(0, middle);
  const right = list.slice(middle);

  return merge(
    mergeSort(left),
    mergeSort(right),
  );
}

function merge(left, right) {

  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {

    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex += 1;
    }
    else {
      result.push(right[rightIndex]);
      rightIndex += 1;
    }
  }

  return result
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

console.log(mergeSort([5,1,4,8,2,7,3,6]));