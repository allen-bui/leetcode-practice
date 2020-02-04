// Time Complexity  - O(N)
// Space Complexity - O(1)

function maximumSubArray(arr, n) {

  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < number; ++i) {
    currentSum += arr[i];
  }
  maxSum = currentSum;
  for (let i = number - 1; i < arr.length - 1; ++i) {
    currentSum = currentSum - arr[i - number + 1] + arr[i + 1];
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

console.log(maximumSubArray([-2, 5, 10, -7, 6, 3, 25], 4)); // 27 from [-7, 6, 3, 25]