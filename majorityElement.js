/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }

  for (let key in map) {
    if (map[key] > Math.floor(nums.length / 2)) {
      return Number(key);
    }
  }
};

console.log(majorityElement([1, 1, 1, 2, 2]))