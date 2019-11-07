// write a function to see if two strings are anagrams of each other

function validAnagram(stringOne, stringTwo) {

  if (stringOne.length !== stringTwo.length) {
    return false;
  }

  const lettersOne = {};
  const lettersTwo = {};

  for (let i = 0; i < stringOne.length; i++) {
    lettersOne[stringOne[i]] = (lettersOne[stringOne[i]] || 0) + 1;
  }

  for (let k = 0; k < stringTwo.length; k++) {
    lettersTwo[stringTwo[k]] = (lettersTwo[stringTwo[k]] || 0) + 1;
  }

  for (let key in lettersOne) {
    if (lettersOne[key] !== lettersTwo[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram('hello', 'oellh')); // true
