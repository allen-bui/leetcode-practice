/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {

  if (!nums.length) return 0;

  let current = 1;
  let max = 1;
  let still = 0;
  let mover = 1;

  while (mover !== nums.length) {
    if (nums[mover] <= nums[mover - 1]) {
      still = mover;
      max = Math.max(max, current);
      mover += 1;
      current = 1;
    } else {
      current += 1;
      mover += 1;
    }
  }
  return Math.max(max, current);
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 2, 3, 4, 5]));
