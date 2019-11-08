/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

  // housekeeping
  if (s.length !== t.length) {
    return false;
  }

  // create one hash map
  const letterCount = {};

  // add letters from first string into hash map and count frequency
  for (let i = 0; i < s.length; i++) {
    if (letterCount[s[i]]) {
      letterCount[s[i]]++;
    } else {
      letterCount[s[i]] = 1;
    }
  }

  // loop through second string and subtract from hash map
  for (let j = 0; j < t.length; j++) {
    if (letterCount[t[j]]) {
      letterCount[t[j]]--;
    } else {
      return false;
    }
  }

  // loop through hash map and make sure all letters are zero, otherwise return false
  for (let letter in letterCount) {
    if (letterCount[letter] !== 0) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram('hello', 'olleh'));