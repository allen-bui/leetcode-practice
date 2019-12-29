// Time Complexity -  O(N)
// Space Complexity - O(N)

var sumZero = function(n) {

  const result = [];

  if (n % 2 === 0) {
      for (let i = (n/2) * -1; i <= n/2; ++i) {
          if (i === 0) continue;
          else result.push(i);
      }
  }
  else {
      for (let i = Math.floor(n/2) * -1; i < Math.ceil(n/2); ++i) {
          result.push(i);
      }
  }
  return result;
};