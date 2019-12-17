// Time Complexity - O(N)
// Space Complexity - O(1)

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

  // split strings and get rid of empty strings
  s = s.split(' ').filter(string => string !== '');

  // reverse and join back together
  return s.reverse().join(' ');

};