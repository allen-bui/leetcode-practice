/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
  let currentIndex = 0;
  let res = 0;

  for (let i = 0; i < word.length; i++) {
    res += Math.abs(currentIndex - keyboard.indexOf(word[i]));
    currentIndex = keyboard.indexOf(word[i]);
  }
  return res;
};
