function threeSum(arr, target) {

  arr.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < arr.length - 2; ++i) {

    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {

      let currentSum = arr[i] + arr[left] + arr[right];

      if (currentSum === target) {
        result.push([arr[i], arr[left], arr[right]]);
        left += 1;
        right -= 1;
        while (arr[left - 1] === arr[left]) left += 1;
        while (arr[right + 1] === arr[right]) right -= 1;
      } else if (currentSum < target) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }
  return result;
}

console.log(threeSum([5, 2, 3, 6, 12, 8, 9, 10], 21));

// [5, 2, 3, 6, 12, 8, 9, 10]
//  i  j