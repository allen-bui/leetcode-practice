// LeetCode #1002: https://leetcode.com/problems/find-common-characters/

/**
 * @Time  - O(N^2)
 * @Space - O(N)
 */
var commonChars = function(A) {

  // return empty array if there is only one word
  if (A.length === 1) {
    return [];
  }

  // split up first word
  let resultArr = A[0].split('');

  // go through each word, split up the word, then filter out the letters
  // that are found in all of them, otherwise return false
  for (const word of A) {
    const tempArr = word.split('');
    resultArr = resultArr.filter((char) => {
      const idx = tempArr.indexOf(char);
      return idx > -1 ? (tempArr[idx] = true) : false;
    });
  }
  return resultArr;
};

console.log(commonChars(['bella', 'label', 'roller'])); // ['e','l','l']
