// Time Complexity - O(N)
// Space Complexity - O(N)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

  // declare variables
  const left = [1];
  const right = [1];
  const result = [];

  // loop through nums array, multiply everything on the left side together
  for (let i = 0; i < nums.length - 1; i++) {
    left.push(nums[i] * left[i]);
  }

  // loop through nums array, multiply everything on the right side together
  for (let j = nums.length - 1; j > 0; j--) {
    right.unshift(nums[j] * right[0]);
  }

  // loop through nums array, multiplying left and right index together
  for (let k = 0; k < nums.length; k++) {
    result[k] = left[k] * right[k];
  }
  return result;
};
