/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  const balloonMap = {
    b: 1,
    a: 1,
    l: 2,
    o: 2,
    n: 1
  };
  const letterMap = {};

  for (const letter of text) {
    letterMap[letter] = letterMap[letter] ? (letterMap[letter] += 1) : 1;
  }

  for (const letter in balloonMap) {
    if (!(letter in letterMap) || balloonMap[letter] > letterMap[letter]) {
      return 0;
    }
  }
  return Math.min(Math.floor(letterMap.l / 2), Math.floor(letterMap.o / 2));
};
