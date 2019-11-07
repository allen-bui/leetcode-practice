// write a function which accepts a sorted array, then returns the unique values in the array

function countUniqueValues(arr) {

  if (arr.length === 0) {
    return 0;
  }

  if (arr.length === 1) {
    return 1;
  }

  let count = 1;
  let pointerOne = 0;
  let pointerTwo = 1;

  for (pointerTwo; pointerTwo < arr.length; pointerTwo++) {
    if (arr[pointerOne] !== arr[pointerTwo]) {
      count++;
      pointerOne = pointerTwo;
    }
  }
  return count;
}

console.log(countUniqueValues([-2, -2, 1, 1, 1, 4, 4, 4, 4, 4, 4, 10])); // 4