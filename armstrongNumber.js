/**
 * @param {number} N
 * @return {boolean}
 */
var isArmstrong = function(N) {

  let sum = 0;
  let str = String(N);

  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]) ** str.length;
  }
  return sum === N;
};