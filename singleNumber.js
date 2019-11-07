/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }

  for (let keys in map) {
    if (map[keys] === 1) {
      return Number(keys);
    }
  }
};

console.log(singleNumber([1,2,1,2,4]));