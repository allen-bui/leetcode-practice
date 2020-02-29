// LeetCode Problem # 383 - https://leetcode.com/problems/ransom-note/

/**
 * @Time  - O(N)
 * @Space - O(1)
 */
var canConstruct = function(ransomNote, magazine) {

  const key = {};

  for (let i = 0; i < magazine.length; ++i) {
      const letter = magazine[i];
      if (key[letter] === undefined) {
          key[letter] = 1;
      } else {
          key[letter] += 1;
      }
  }

  for (let i = 0; i < ransomNote.length; ++i) {
      const letter = ransomNote[i];
      if (!(letter in key)) return false;
      else if (letter in key) {
          if (key[letter] === 0) return false;
          key[letter] -= 1;
      }
  }
  return true;
};