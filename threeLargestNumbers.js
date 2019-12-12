// Time Complexity = O(N)
// Space Complexity = O(1)


function findThreeLargestNumbers(array) {

  const result = [-Infinity, -Infinity, -Infinity];

  for (let i = 0; i < array.length; i++) {

    if (array[i] >= result[2]) {
      result[0] = result[1];
      result[1] = result[2];
      result[2] = array[i];
    }
    else if (array[i] >= result[1]) {
      result[0] = result[1];
      result[1] = array[i];
    }
    else if (array[i] >= result[0]) {
      result[0] = array[i];
    }
  }
  return result;
}