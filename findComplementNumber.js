/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {

  const binaryNum = num.toString(2);
  let result = '';

  for (const binaryDigit of binaryNum) {
    if (binaryDigit === '0') result += '1';
    else result += '0';
  }
  return parseInt(result, 2);
};

console.log(findComplement(1000)); // 23