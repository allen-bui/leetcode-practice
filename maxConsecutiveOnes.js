// LeetCode Problem # 485 - https://leetcode.com/problems/max-consecutive-ones/

/**
 * @Time  - O(N)
 * @Space - O(1)
 */
var findMaxConsecutiveOnes = function(nums) {

  let maxSequence = 0;
  let current = 0;

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === 1) current += 1;
    else {
      maxSequence = Math.max(maxSequence, current);
      current = 0;
    }
  }
  return Math.max(maxSequence, current);
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));