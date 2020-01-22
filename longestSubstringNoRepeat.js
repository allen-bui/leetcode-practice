/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

  /*
  Pseudocode
  ----------
  1. create a max and current variable
  2. use two for loops, outer loop to loop through each letter
  3. inner loop will add words into a hash set and check to see if it's been seen before
  4. compare current to max, and take the greater length
  */

  let current = '';
  let max = 0;
  let seen = {};

  for (let i = 0; i < s.length; ++i) {

    seen[s[i]] = true;
    current = s[i];

    for (let j = 1; j < s.length; ++j) {

      if (seen[s[j]] === undefined) {
        current += s[j];
        seen[s[j]] = true;
        continue;
      }
      max = Math.max(current.length, max);
      seen = {};
      current = '';
    }
  }
  return max;
};

console.log(lengthOfLongestSubstring('bbbbb'));