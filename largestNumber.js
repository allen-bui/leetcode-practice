var largestNumber = function(nums) {
  return nums
    .sort((a, b) => `${b}${a}` - `${a}${b}`)
    .join('')
    .replace(/^0*/, '') || '0';
}

console.log(largestNumber([95, 9, 7, 0, 14])); // 9957140
