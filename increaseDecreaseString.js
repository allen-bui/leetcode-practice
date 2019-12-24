// Time Complexity  - O(N)
// Space Complexity - O(N)

var diStringMatch = function(S) {

  // declare variables
  let increase = 0;
  let decrease = S.length;
  const result = [];

  // loop through string S, pushing a decrease or increase value based on string character
  for (let i = 0; i <= S.length; i++) {
    if (S[i] === 'I') {
      result.push(increase++);
    }
    else {
      result.push(decrease--);
    }
  }
  return result;
};

console.log(diStringMatch('IIDD')); // [0, 1, 4, 3]