/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n, key) {

  key ? key : key = {};

  const sumSquare = String(n).split('').map(number => number ** 2).reduce((a, b) => a + b);

  if (key[sumSquare]) {
    return false;
  }
  else if (sumSquare === 1) {
    return true;
  }
  else {
    key[sumSquare] = true;
    return isHappy(sumSquare, key);
  }
};