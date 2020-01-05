// Time Complexity - O(N)
// Space Complexity - O(N)

var dailyTemperatures = function(T) {
  let result = new Array(T.length).fill(0);
  let stack = [];

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