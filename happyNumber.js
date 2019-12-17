// Time Complexity - O(N)
// Space Complexity - O(N)

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n, key) {
  // memoize the numbers we've seen before
  key ? key : (key = {});

  // calculate square of the number
  const sumSquare = String(n)
    .split('')
    .map((number) => number ** 2)
    .reduce((a, b) => a + b);

  // if we've seen the number, return false since it will be an infinite loop
  if (key[sumSquare]) {
    return false;
  }
  // if the number squares to one, then return true
  else if (sumSquare === 1) {
    return true;
  }
  // keep recursing until we hit 1 or infinite loop which will be caught by the key
  else {
    key[sumSquare] = true;
    return isHappy(sumSquare, key);
  }
};
