// Time Complexity -  O(N log N)
// Space Complexity - O(N)

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {

  const hash = {};
  const remaining = [];
  let keySort = [];

  // first pass:  loop through key (arr2) and make an array as value for each element
  for (const key of arr2) {
    hash[key] = [];
  }

  // second pass: loop through original array, and push into hash if value is there
  //              otherwise push into remaining array
  for (const number of arr1) {
    if (hash[number] !== undefined) {
      hash[number].push(number);
    } else {
      remaining.push(number);
    }
  }

  // third pass:  loop through key, and concatenate the arrays together
  for (const key of arr2) {
    keySort = keySort.concat(hash[key]);
  }

  // sort the remaining numbers
  remaining.sort((a, b) => a - b);

  // return concatenated key array and remaining array
  return keySort.concat(remaining);
};

const arr1 = [2,3,1,3,2,4,6,7,9,2,19];
const arr2 = [2,1,4,3,9,6];

console.log(relativeSortArray(arr1, arr2)); // [2,2,2,1,4,3,3,9,6,7,19]