/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    const beginning = s[i];
    const end = s[s.length - i - 1];

    s[i] = end;
    s[s.length - i - 1] = beginning;
  }
  return s;
};

console.log(reverseString(['a', 'e', 'l', 'l', 'o', 'o']));
