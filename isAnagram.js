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

  // create two hash tables to store letters and their frequency count
  const mapOne = {};
  const mapTwo = {};

  // add letters into two hash maps
  for (let i = 0; i < s.length; i++) {

    // hash one
    if (mapOne[s[i]]) {
      mapOne[s[i]]++;
    } else {
      mapOne[s[i]] = 1;
    }

    // hash two
    if (mapTwo[t[i]]) {
      mapTwo[t[i]]++;
    } else {
      mapTwo[t[i]] = 1;
    }
  }

  // compare two hash tables and make sure the frequency counts are the same for each letter.
  for (let letter in mapOne) {
    if (mapOne[letter] !== mapTwo[letter]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram('hello', 'olleh'));