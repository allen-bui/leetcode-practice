// Time Complexity -  O(N)
// Space Complexity - O(1)

function kadanesAlgorithm(array) {

  // declare variables
  let maxSum = -Infinity;
  let current = -Infinity;

  // loop through each element, check if current sum + current value is greater than current value
  // set max sum equal to current value or current max sum;
  for (let i = 0; i < array.length; i++) {
    current = Math.max(array[i], array[i] + current);
    maxSum = Math.max(maxSum, current);
  }
  return maxSum;
}
