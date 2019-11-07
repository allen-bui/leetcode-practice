/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

  const keys = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complement in keys) {
      return [keys[complement], i];
    }
    keys[nums[i]] = i;
  }
  return null;
};

// { '2': 1, '7': 0, '-2': 2, '-6': 3 }
console.log(twoSum([3, 2, 4], 6)); // => [0, 1];
