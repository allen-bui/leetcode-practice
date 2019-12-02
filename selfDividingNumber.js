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

  for (let k = 0; k < numbers.length; k++) {
    const currentNumber = String(numbers[k]);

    for (let j = 0; j < currentNumber.length; j++) {
      if (numbers[k] % Number(currentNumber[j]) === 0) {
        results.push(numbers[k]);
      }
    }
  }

  return results;
};

console.log(selfDividingNumbers(5, 22));
