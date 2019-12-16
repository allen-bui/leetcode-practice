// Time Complexity - O(N)
// Space Complexity - O(N)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

  // declare variables
  const result = new Array(nums.length).fill(1);
  let multiplier = 1;

  // loop through nums array, multiply everything on the left side together
  for (let i = 1; i < nums.length; i++) {
    result[i] = nums[i - 1] * result[i - 1];
  }

  // loop through nums array, multiply everything on the right side together
  for (let j = nums.length - 1; j > 0; j--) {
    result[j] = result[j] * multiplier;
    multiplier = nums[j] * multiplier;
  }
  return result;
};
