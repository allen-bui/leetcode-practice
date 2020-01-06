/**
 * @Time  - O(N)
 * @Space - O(N)
 */
var shortestToChar = function(S, C) {

  const characterIndices = [];
  const result = [];

  for (let i = 0; i < S.length; ++i) {
    if (S[i] === C) {
      characterIndices.push(i);
    }
  }

  for (let i = 0, j = 0; i < S.length; ++i) {
    const next = Math.min(j + 1, characterIndices.length - 1);
    result.push(Math.min(Math.abs(i - characterIndices[j]), Math.abs(i - characterIndices[next])));
    if (i >= characterIndices[next]) j = next;
  }
  return result;
};

console.log(shortestToChar('loveleetcode', 'e')); // [ 3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0 ]