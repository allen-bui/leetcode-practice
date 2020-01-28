// LeetCode Problem # 238 - https://leetcode.com/problems/product-of-array-except-self/

/**
 * @Time  - O(N)
 * @Space - O(N)
 */
var productExceptSelf = function(nums) {

  const left = new Array(nums.length).fill(1);
  const right = new Array(nums.length).fill(1);
  const result = [];

  for (let i = 1; i < nums.length; ++i) {
    left[i] = nums[i - 1] * left[i - 1];
  }

  for (let j = nums.length - 2; j > -1; --j) {
    right[j] = nums[j + 1] * right[j + 1];
  }

  for (let k = 0; k < nums.length; ++k) {
    result[k] = left[k] * right[k];
  }
  return result;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]