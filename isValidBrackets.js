/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

  const remainingBrackets = [];
  const key = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      remainingBrackets.push(s[i]);
    } else {
      if (remainingBrackets[remainingBrackets.length - 1] === key[s[i]]) {
        remainingBrackets.pop();
      }
      else {
        return false;
      }
    }
  }
  return remainingBrackets.length === 0 ? true : false;
};

console.log(isValid('(])'));