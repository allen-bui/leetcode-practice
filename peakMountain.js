/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  let peak = 0;

  for (let i = 1; i < A.length - 1; i++) {
    const left = A[i - 1];
    const right = A[i + 1];

    if (A[i] > left && A[i] > right) {
      peak = Math.max(peak, A[i]);
    }
  }
  return peak;
};
