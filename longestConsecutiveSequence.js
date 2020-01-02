var longestConsecutive = function(nums) {

  const setNums = new Set(nums);
  const seen = new Array(nums.length).fill(false);
  let currentLength = 0;
  let maxLength = 0;

  for (let i = 0; i < nums.length; ++i) {

    let forward = nums[i] + 1;
    let backward = nums[i] - 1;

    if (!seen[i]) {
      seen[i] = true;
      currentLength += 1;
      while (setNums.has(forward)) {
        seen[forward] = true;
        currentLength += 1;
        forward += 1;
      }
      while (setNums.has(backward)) {
        seen[backward] = true;
        currentLength += 1;
        backward -= 1;
      }
      maxLength = Math.max(maxLength, currentLength);
      currentLength = 0;
    }
  }
  return maxLength;
};

console.log(longestConsecutive([3, 1, 2, 10, 12, 13, 11])); // 4