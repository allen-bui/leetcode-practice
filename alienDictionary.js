// Time Complexity  - O(N)
// Space Complexity - O(1)

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {

  const map = {};

  // use a hashmap to store the order of the alphabet

  for (let i = 0; i < order.length; ++i) {
      const letter = order[i];
      map[letter] = i;
  }

  // loop through words, check first letter and compare to the next
  // if hashmap value of current is greater than next, return false

  for (let j = 0; j < words.length - 1; ++j) {
      const currentLetter = words[j][0];
      const nextLetter = words[j+1][0];
      if (map[currentLetter] > map[nextLetter]) {
          return false;
      }
  }
  return true;
};

console.log(isAlienSorted(['bibs', 'allz'], 'ab'));