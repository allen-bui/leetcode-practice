/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function(A, B) {

  const map = {};

  for (let i = 0; i < B.length; i++) {
    if (map[B[i]]) {
      continue;
    }
    map[B[i]] = i;
  }
  return A.map(element => map[element]);
};