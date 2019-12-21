// Time Complexity  - O(N)
// Space Complexity - O(1)

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

  // create a hash table
  const map = {};

  // first pass, store all letters inside hash table
  for (const letter of s) {
    if (!map[letter]) {
      map[letter] = 1;
    } else {
      map[letter] += 1;
    }
  }

  // second pass, find the first key that equates to one
  for (const key in map) {
    if (map[key] === 1) {
      return s.indexOf(key);
    }
  }
  return -1;
};

console.log(firstUniqChar('abcbc')); // 0