/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

  nums = nums.concat(nums);

  const res = nums.slice((nums.length / 2) - k, nums.length - k);

  return res;

};

console.log(rotate([1,2,3,4,5,6,7], 6));