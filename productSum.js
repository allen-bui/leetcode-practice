// Time Complexity - O(N)
// Space Complexity - O(D) where D is the greatest depth of special arrays in array

function productSum(array, multiplier = 1) {

  // declare variables
  let result = 0;

  // loop through array, if another array, then recurse and add multiplier
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result += productSum(array[i], multiplier + 1);
    } else {
      result += array[i];
    }
  }

  // return result * multiplier for different levels
  return result * multiplier;
}

console.log(productSum([5, 2, [7, -1]]));
