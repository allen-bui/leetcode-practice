/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N === 0) return 0;
  const arr = [];
  arr[0] = 1;
  arr[1] = 1;

  for (let i = 2; i < N; ++i) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[N - 1];
};
