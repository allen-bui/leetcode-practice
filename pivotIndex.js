// Time Complexity  - O(N)
// Space Complexity - O(1)

var pivotIndex = function(nums) {

  // declare variables
  const sum = nums.reduce((a, b) => a + b);
  let currentSum = 0;

  // loop through array and subtract current index divided by two
  // if it equals current sum, then return current index
  for (let i = 0; i < nums.length; ++i) {
    if ((sum - nums[i] / 2) === currentSum) {
      return i;
    }
    currentSum += nums[i];
  }
  return -1;
};

console.log(pivotIndex([[1, 7, 3, 6, 5, 6]])); // 3;