/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let result = nums[0];
  let current = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], nums[i] + current);

    if (result < current) {
      result = current;
    }
  }
  return result;
};

console.log(maxSubArray([5, 2, -3, 20]));
