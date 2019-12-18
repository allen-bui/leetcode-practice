// Time Complexity - O(N^3)
// Space Complexity - O(1)

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

  // housekeeping, check to see if string length is 0 or 1, then return string;
  if (s.length === 0 || s.length === 1) {
    return s;
  }

  let longestPalindrome = s[0];

  // use two pointers (i and j), one at left and one at right, keep iterating through and check if valid palindrome when
  // the two letters match, take the longer length palindrome and keep iterating
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j > i; j--) {
      if (s[i] === s[j]) {
        const currentSubstring = s.slice(i, j + 1);
        if (
          isValidPalindrome(currentSubstring) &&
          currentSubstring.length > longestPalindrome.length
        ) {
          longestPalindrome = currentSubstring;
        }
      }
    }
  }
  return longestPalindrome;
};

// helper function to determine if string is palindrome or not
function isValidPalindrome(string) {
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log('ARACECAR'); // RACECAR