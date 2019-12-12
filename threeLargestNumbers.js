// Time Complexity = O(N log N)
// Space Complexity = O(1)


function findThreeLargestNumbers(array) {

	const length = array.length;

  // sort array in descending order
  array.sort((a, b) => a - b);

  // return first three elements
  return [array[length - 3], array[length - 2], array[length - 1]];

}