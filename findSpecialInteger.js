// LeetCode Problem # 1287 - https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/

/**
 * @Time  - O(N)
 * @Space - O(1)
 */
var findSpecialInteger = function(arr) {

  let currentValue = arr[0];
  let count = 1;

  for (let i = 1; i < arr.length; ++i) {

    if (arr[i] === currentValue) {
      count += 1;
      continue;
    }
    else if ((count / arr.length) > 0.25) return currentValue;
    else {
      currentValue = arr[i];
      count = 1;
    }
  }
  return currentValue;
};

console.log(findSpecialInteger([1, 2, 3, 3]));
