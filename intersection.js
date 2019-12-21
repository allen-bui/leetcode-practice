// Time Complexity - O(N)
// Space Complexity - O(N)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

  // create set out of nums 1 and result
  const setOne = new Set(nums1);
  const res = new Set();

  // if setOne has a value in nums2, add to result
  for (let i = 0; i < nums2.length; ++i) {
    if (setOne.has(nums2[i])) {
      res.add(nums2[i]);
    }
  }
  return [...res];
};

console.log (intersection([4,9,5], [9,4,9,8,4]))

