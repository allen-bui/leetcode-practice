/**
 * @Time  - O(N^2)
 * @Space - O(1)
 */
var lengthOfLongestSubstring = function(s) {

  /*
  Pseudocode
  ----------
  1. create a max and current variable
  2. add edge case where s length is one
  3. use two for loops, outer loop to loop through each letter
  4. inner loop will add words into a hash set and check to see if it's been seen before
  5. compare current to max, and take the greater length
  */

  if (s.length === 1) return 1;

  let current = '';
  let max = 0;
  let seen = {};

  for (let i = 0; i < s.length; ++i) {

    seen[s[i]] = true;
    current = s[i];

    for (let j = 1; j < s.length; ++j) {

      if (seen[s[j]] === undefined) {
        seen[s[j]] = true;
        current += s[j];
        if (current.length === s.length) return current.length;
        continue;
      }
    }
    max = Math.max(current.length, max);
    seen = {};
    current = '';
  }  return max;
};

console.log(lengthOfLongestSubstring('pwwkew')); // 1