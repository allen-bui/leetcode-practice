/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      if (index !== i) {
        nums[i] = 0;
      }
      index++;
    }
  }
  return nums;
};

console.log(moveZeroes([1, 0, 0, 12]));