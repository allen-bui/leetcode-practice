/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

  const setOne = new Set(nums1);
  const setTwo = new Set(nums2);
  const map = {};
  const res = [];

  for (let num of [...setOne]) {
    map[num] = 1;
  }

  for (let num of [...setTwo]) {
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num] += 1;
    }
  }

  for (let key in map) {
    if (map[key] > 1) {
      res.push(key - 0);
    }
  }
  return res;
};

console.log (intersection([4,9,5], [9,4,9,8,4]))

