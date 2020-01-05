// Time Complexity -  O(N log N)
// Space Complexity - O(1)

var largestNumber = function(nums) {
  // sort the array by concatenating numbers together and seeing
  // which makes the larger number, then join string together and
  // remove unnecessary zeroes if any
  return nums
    .sort((a, b) => `${b}${a}` - `${a}${b}`)
    .join('')
    .replace(/^0*/, '') || '0';
}

console.log(largestNumber([95, 9, 7, 0, 14])); // 9957140
