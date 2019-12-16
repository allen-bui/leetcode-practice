// Time Complexity - O(N)
// Space Complexity - O(N)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

  const left = [1];
  const right = [1];
  const result = [];

  for (let i = 0; i < nums.length - 1; i++) {
    left.push(nums[i] * left[i]);
  }

  for (let j = nums.length - 1; j > 0; j--) {
    right.unshift(nums[j] * right[0]);
  }

  for (let k = 0; k < nums.length; k++) {
    result[k] = left[k] * right[k];
  }
  return result;
};
