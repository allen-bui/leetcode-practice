// LeetCode Problem # 347 - https://leetcode.com/problems/top-k-frequent-elements/

/**
 * @Time  - O(N log N)
 * @Space - O(N)
 */
var topKFrequent = function(nums, k) {
  /*
  Pseudocode
  ----------
  1. create a result array and hash map
  2. first pass, loop through each and add to hash map
  3. sort hash map and slice from 0 to K
  4. return result array
  */

  const map = {};

  for (let i = 0; i < nums.length; ++i) {
    map[nums[i]] === undefined ? (map[nums[i]] = 0) : (map[nums[i]] += 1);
  }

  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .map((set) => Number(set[0]))
    .slice(0, k);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)) // [1, 2]