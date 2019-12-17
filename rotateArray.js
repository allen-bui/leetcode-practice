// Time Complexity - O(1)
// Space Complexity - O(2 x N)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

  // mod K in case shift is longer than length of nums
  const modK = k % (nums.length / 2);

  // double the length of nums, since solution will always fall into this range
  nums = nums.concat(nums);

  // slice array from shifting point to end of shifting point
  const res = nums.slice(nums.length / 2 - modK, nums.length - modK);

  return res;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 21));
