// Time Complexity - O(N)
// Space Complexity - O(1)

var findNumbers = function(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (String(nums[i]).length % 2 === 0) {
      count += 1;
    }
  }
  return count;
};
