var diStringMatch = function(S) {

  let increase = 0;
  let decrease = S.length;
  const result = [];

  for (let i = 0; i < S.length; ++i) {

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