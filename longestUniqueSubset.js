// write a function to find the maximum sum of a subset (n) of an array

// ex. [5, 2, 3, 9, 3], n = 3 -> 15
// ex. [5, 2, 3, 9, 3], n = 2 -> 12

function maxSubsetArray(arr, n) {
  if (arr.length < n) {
    return null;
  }

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < n; i++) {
    tempSum += arr[i];
  }

  maxSum = tempSum;

  for (let j = n; j < arr.length; j++) {
    tempSum = tempSum - arr[j - n] + arr[j];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubsetArray([5, 2, 3, 9, 3], 3));
