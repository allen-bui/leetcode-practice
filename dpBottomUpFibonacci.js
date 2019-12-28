// Time Complexity - O(N)
// Space Complexity - O(N)

// NOTE
// We could make this O(1) space complexity by only storing the N-1 and N-2 value
// deleting the older values as we continue our loop

function dpBottomUpFibonacci(n) {

  // create hash
  const fib = {};
  let sum;

  // loop through each number until n, and store sum of previous two numbers
  for (let i = 1; i < n + 1; ++i) {
    if (i <= 2) {
      sum = 1;
    } else {
      sum = fib[i - 1] + fib[i - 2];
    }
    fib[i] = sum;
  }
  return fib[n];
}

console.log(dpBottomUpFibonacci(10)); // 55
