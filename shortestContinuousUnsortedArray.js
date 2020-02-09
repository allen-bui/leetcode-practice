// LeetCode Problem # 581 - https://leetcode.com/problems/shortest-unsorted-continuous-subarray/

/**
 * @Time  - O(N)
 * @Space - O(1)
 */
var findUnsortedSubarray = function(nums) {

  let left = 1;
  let right = nums.length - 2;
  let leftPrevious = nums[left - 1];
  let rightPrevious = nums[right + 1];
  let result = [0, 0];

  if (nums.length === 2) {
    return nums[0] < nums[1]
      ? 0
      : 2
  }

  while (left <= right) {
    if (leftPrevious < nums[left]) {
      leftPrevious = nums[left];
      left += 1;
    } else {
      result[0] = left - 1;
      left += 1;
    }

    if (rightPrevious > nums[right]) {
      rightPrevious = nums[right];
      right -= 1;
    } else {
      result[1] = right + 1;
      right -= 1;
    }
  }

  console.log(result);

  return result[0] === 0 && result[1] === 0
    ? 0
    : nums.slice(result[0], result[1] + 1).length;
};

const arr = [5, 4, 3, 2, 1];
console.log(findUnsortedSubarray(arr)); // [6, 4, 8, 10, 9]
