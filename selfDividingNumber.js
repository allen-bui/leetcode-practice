/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  const results = [];
  const numbers = [];

  for (let i = left; i < right + 1; i++) {
    numbers.push(i);
  }

  for (let j = 0; j < numbers.length; j++) {
    if (isSelfDividingNumber(numbers[j])) {
      results.push(numbers[j]);
    }
  }
  return results;
};

function isSelfDividingNumber(num) {
  return num
    .toString()
    .split('')
    .map((n) => Number(n))
    .map((digit) => digit !== 0 && num % digit === 0)
    .reduce((acc, val) => acc && val);
}

console.log(selfDividingNumbers(5, 22));
