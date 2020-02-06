// Time Complexity -  O(N)
// Space Complexity - O(N)

function fibonacci(n) {

  if (n === 0) {
    return 0;
  }

  const arr = [1, 1];

  for (let i = 2; i < n; ++i) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr[n - 1];
}

console.log(fibonacci(6)); // 1, 1, 2, 3, 5, 8
