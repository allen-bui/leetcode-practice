/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {

  let res = 0;
  let balance = 0;

  for (let i = 0; i < s.length; i++) {

    if (s[i] === 'L') {
      balance++;
    } else {
      balance--;
    }
    if (balance === 0) {
      res++;
    }
  }
  return res;
};

console.log(balancedStringSplit("RLRRRLLRLL")); // 2
