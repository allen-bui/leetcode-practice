// LeetCode Problem # 1342 - https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

/**
 * @Time  - O(log N)
 * @Space - O(1)
 */

var numberOfSteps = function(num) {
  let steps = 0;
  while (num !== 0) {
    if (num % 2) num -= 1;
    else num /= 2;
    steps += 1;
  }
  return steps;
};

console.log(numberOfSteps(14)); // 6
