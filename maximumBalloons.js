// LeetCode Problem #1189 - https://leetcode.com/problems/maximum-number-of-balloons/

/**
 * @Time  - O(N)
 * @Space - O(1)
 */
var maxNumberOfBalloons = function(text) {

  // store letter occurances inside the word "balloon"
  // store letter inside
  const balloonMap = {
    b: 1,
    a: 1,
    l: 2,
    o: 2,
    n: 1
  };
  const letterMap = {};

  // first pass: loop through text and add into hash map
  for (const letter of text) {
    letterMap[letter] = letterMap[letter] ? (letterMap[letter] += 1) : 1;
  }

  // second pass: compare the balloon map and text map, if any letter in balloon
  // is not in text map, or balloon map has more characters than text map, return zero
  for (const letter in balloonMap) {
    if (!(letter in letterMap) || balloonMap[letter] > letterMap[letter]) {
      return 0;
    }
  }

  // now that we know the text map has at least one 'balloon' combination,
  // take the minimium of the 'l' or 'o' letter divided by two since there's two occurances
  return Math.min(Math.floor(letterMap.l / 2), Math.floor(letterMap.o / 2));
};
