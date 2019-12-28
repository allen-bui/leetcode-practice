// Time Complexity - O(N)
// Space Complexity - O(N)

function dpFibonacci(n, memo = {}) {

  // declare sum
  let sum;

  // if we've already seen this problem, then return answer
  if (n in memo) {
    return memo[n];
  }
  if (n < 2) {
    sum = 1;
    return sum;
  } else {
    sum = dpFibonacci(n - 1, memo) + dpFibonacci(n - 2, memo);
    memo[n] = sum
    return sum;
  }
}

console.log(dpFibonacci(10)); // 89