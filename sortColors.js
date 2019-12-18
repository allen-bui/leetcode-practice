/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  // swap zero and two first
  // swap one and two after

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {

    if (nums[left] === 2 && nums[right] === 0) {
      const placeholder = nums[left];
      nums[left] = nums[left];
      nums[right] = placeholder;
      left++;
      right--;
    }
    while (nums[left] !== 2) {
      left++;
    }
    while (nums[right] !== 0) {
      right--;
    }
  }
  return nums;
};

console.log([1,1,2,2,0,0]); // 1 1 0 0 2 2