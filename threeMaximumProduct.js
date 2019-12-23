// Time Complexity  - O(N)
// Space Complexity - O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {

  // define min and max arrays
  const max = [-Infinity, -Infinity, -Infinity];
  const min = [Infinity, Infinity];


  // loop through array, keep track of lowest numbers and highest numbers
  // swap and replace if there is a new lowest or highest number and move
  // other values down
  for (let i = 0; i < nums.length; ++i) {

    // check highest values
    if (nums[i] > max[2]) {
      max[0] = max[1];
      max[1] = max[2];
      max[2] = nums[i];
    }
    else if (nums[i] > max[1]) {
      max[0] = max[1];
      max[1] = nums[i];
    }
    else if (nums[i] > max[0]) {
      max[0] = nums[i];
    }

    // check lowest values
    if (nums[i] < min[1]) {
      min[0] = min[1];
      min[1] = nums[i];
    }
    else if (nums[i] < min[0]) {
      min[0] = nums[i];
    }
  }
  return Math.max(max[0] * max[1] * max[2], min[0] * min[1] * max[2]);
};

console.log(maximumProduct([-10, 5, -6, -10])); // 500
