/**
 * @param {string} S
 * @return {string}
 */
var removeVowels = function(S) {
  let result = '';

  for (let letter of S) {
    if (
      letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
    ) {
      continue;
    }
    result += letter;
  }
  return result;
};

console.log(removeVowels('allen'));
