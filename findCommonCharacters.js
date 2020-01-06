// LeetCode #1002: https://leetcode.com/problems/find-common-characters/

/**
 * @Time  - O(N^2)
 * @Space - O(N)
 */
var commonChars = function(A) {
  if (A.length === 1) {
    return [];
  }

  let resultArr = A[0].split('');

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
