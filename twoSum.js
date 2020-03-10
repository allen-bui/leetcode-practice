function twoSum(arr, target) {

  const key = {};

  for (let i = 0; i < arr.length; ++i) {
    const targetValue = target - arr[i];
    if (targetValue in key) {
      return [arr[i], targetValue];
    } else {
      key[arr[i]] = true;
    }
  }
  return false;
}

console.log(twoSum([5, 2, 10, 3, 1], 15)); // [5, 10]
