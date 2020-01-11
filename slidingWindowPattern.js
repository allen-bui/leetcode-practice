function maximumSubArray(arr, n) {

  let currentSum = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < n; ++i) {
    currentSum += arr[i];
  }
  maxSum = currentSum;
  for (let j = n - 1; j < arr.length - 1; ++j) {
    currentSum = currentSum - arr[j - n + 1] + arr[j + 1];
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}

console.log(maximumSubArray([-2, 5, 10, -7, 6, 3, 25], 4)); // 27 from [-7, 6, 3, 25]