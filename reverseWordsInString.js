// LeetCode Problem #557 - https://leetcode.com/problems/reverse-words-in-a-string-iii/

/**
 * @Time  - O(N^2)
 * @Space - O(N)
 */
var reverseWords = function(s) {
  return s
  .split(' ')
  .map(word => reverseSingleWord(word))
  .join(' ');
};

function reverseSingleWord(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

console.log(reverseWords("Let's take LeetCode contest"));