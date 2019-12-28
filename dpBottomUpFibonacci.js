function dpBottomUpFibonacci(n) {

  const fib = {};
  let sum;

  for (let i = 1; i < n+1; ++i) {

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