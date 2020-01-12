// Time Complexity  - O(N)
// Space Complexity - O(1)

function maximumSubArray(arr, n) {

  let currentSum = 0;
  let maxSum;

  // loop through array up to nth-digit and add up sum
  // set max sum equal to the current sum after loop;
  for (let i = 0; i < n; ++i) {
    currentSum += arr[i];
  }
  maxSum = currentSum;

  // subtract the previous element, then add the next element
  // set max sum to whichever is higher, currentSum and maxSum
  for (let j = n - 1; j < arr.length - 1; ++j) {
    currentSum = currentSum - arr[j - n + 1] + arr[j + 1];
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}

console.log(maximumSubArray([-2, 5, 10, -7, 6, 3, 25], 4)); // 27 from [-7, 6, 3, 25]