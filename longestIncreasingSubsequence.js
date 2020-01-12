/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {

  // use two pointers (still and mover), start at 0
  let current = 1;
  let max = 1;
  let still = 0;
  let mover = 1;

  // increment mover until current index is lower than previous index
  while (mover !== nums.length - 1) {

    if (nums[mover] <= nums[mover - 1]) {
      max = Math.max(current, max);
      current = 1;
      still = mover;
      mover += 1;
    }
    else {
      current += 1;
      mover += 1;
    }
  }
  return max;
};

console.log(findLengthOfLCIS([1, 3, 5, 6, 7]));