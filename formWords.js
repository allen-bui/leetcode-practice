var countCharacters = function(words, chars) {
  let remainingChars = {};
  let charCopy;
  let sum = 0;

  // first pass, add chars to hash table
  for (const letter of chars) {
    if (remainingChars[letter] === undefined) remainingChars[letter] = 1;
    else remainingChars[letter] += 1;
  }

  // keep original letters to reset words
  charCopy = { ...remainingChars };

  // second pass, loop through words and check validity of each
  // then reset back to original copy

  words.forEach(word => {
    remainingChars = { ...charCopy };

    for (const letter of word) {
      // check if letter is in hash table
      if (remainingChars[letter] === undefined) {
        break;
        // reduce numbers from hash table
      } else if (remainingChars[letter] > 0) {
        remainingChars[letter] -= 1;
        if (remainingChars[letter] < 0) break;
      }
      sum += word.length;
    }
  });
  return sum;
};

console.log(countCharacters(["allen"], "allen"));
