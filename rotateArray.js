/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

  const modK = k % (nums.length / 2);

  nums = nums.concat(nums);

  const res = nums.slice(nums.length / 2 - modK, nums.length - modK);

  return res;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 21));
