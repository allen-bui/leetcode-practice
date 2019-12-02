/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {

  if (s.length < 2) {
    return false;
  }

  for (let i = 1; i < s.length / 2; i++) {
    if (s.length % i === 0 && s.slice(0, i).repeat(s.length / i) === s) {
      return true;
    }
  }
  return false;
};

console.log(repeatedSubstringPattern('ababab'));
