/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {

  const queue = [];
  queue.push(s[0]);

  for (let i = 1; i < s.length; i++) {

    if (queue[0] === s[i]) {
      queue.shift();
    } else {
      queue.push(s[i]);
    }
  }
  return queue.length === 0 ? true : false;
};

console.log(repeatedSubstringPattern('abab'));
