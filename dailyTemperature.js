// Time Complexity - O(N)
// Space Complexity - O(N)

var dailyTemperatures = function(T) {

  let result = new Array(T.length).fill(0);
  let stack = [];

  // the idea is to use a stack to keep track of the index
  // when the current iteration emperature is higher than the
  // latest stack index, then replace the result index
  // with current iteration minus index
  for (let i = 0; i < T.length; ++i) {
    while(stack.length > 0 && T[i] > T[stack[stack.length - 1]]) {
      let index = stack.pop();
      result[index] = i - index;
    }
    stack.push(i);
  }
  return result;
};

const arr = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(arr));