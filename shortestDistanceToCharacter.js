// LeetCode Problem #821 - https://leetcode.com/problems/shortest-distance-to-a-character/

/**
 * @Time  - O(N)
 * @Space - O(N)
 */
var shortestToChar = function(S, C) {

  const characterIndices = [];
  const result = [];

  // loop through to find indices of C
  for (let i = 0; i < S.length; ++i) {
    if (S[i] === C) {
      characterIndices.push(i);
    }
  }

  // loop through S, calculate the distance between indicies while i is
  // not equal to next, if equal, then move next to the next C index
  for (let i = 0, j = 0; i < S.length; ++i) {
    const next = Math.min(j + 1, characterIndices.length - 1);
    result.push(Math.min(Math.abs(i - characterIndices[j]), Math.abs(i - characterIndices[next])));
    if (i >= characterIndices[next]) j = next;
  }
  return result;
};

console.log(shortestToChar('loveleetcode', 'e')); // [ 3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0 ]