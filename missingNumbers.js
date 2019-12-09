/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {

  const result = [];
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = 1;
  }

  for (let j = 1; j < nums.length + 1; j++) {
    if (!(String(j) in hash)) {
      result.push(j);
    }
  }
  return result;
};
