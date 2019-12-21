// Time Complexity  - O(N)
// Space Complexity - O(1)

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

  const map = {};

  for (const letter of s) {
    if (!map[letter]) {
      map[letter] = 1;
    } else {
      map[letter] += 1;
    }
  }

  for (const key in map) {
    if (map[key] === 1) {
      return s.indexOf(key);
    }
  }
  return -1;
};

console.log(firstUniqChar('abcbc')); // 0