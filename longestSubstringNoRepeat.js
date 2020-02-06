/**
 * @Time  - O(N^2)
 * @Space - O(1)
 */
var lengthOfLongestSubstring = function(s) {

  const lastSeen = {};
  let longest = [0, 1];
  let startIndex = 0;

  for (let i = 0; i < s.length; ++i) {
    const currentChar = s[i];
    if (currentChar in lastSeen) {
      startIndex = Math.max(startIndex, lastSeen[currentChar] + 1);
    }
    if (longest[1] - longest[0] < i + 1 - startIndex) {
      longest = [startIndex, i + 1];
    }
    lastSeen[currentChar] = i;
  }
  return s.slice(longest[0], longest[1]);
};

console.log(lengthOfLongestSubstring('pwwkew')); // 1