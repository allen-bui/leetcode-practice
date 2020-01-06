// LeetCode #1002: https://leetcode.com/problems/find-common-characters/

/**
 * @Time  - O(N^2)
 * @Space - O(N)
 */
var commonChars = function(A) {

  const map = {};
  const res = [];

  for (word of A) {
    for (letter of word) {
      if (map[letter] !== undefined) map[letter] += 1;
      else map[letter] = 1;
    }
  }

  for (key in map) {
    if (map[key] % A.length === 0) {
      const repeat = map[key] / A.length;
      for (let i = 0; i < repeat; ++i) {
        res.push(key);
      }
    }
  }
  return res;
};

console.log(commonChars(['bella', 'label', 'roller'])); // ['e','l','l']
