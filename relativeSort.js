// Time Complexity -  O(N^2)
// Space Complexity - O(N)

var relativeSortArray = function(arr1, arr2) {

  const remaining = [];
  const found = [];
  const keySet = new Set(arr2);

  // loop through original array and push numbers not found in the key
  // to 'remaining' array so we can sort these numbers later
  for (let i = 0; i < arr1.length; ++i) {
    if (!keySet.has(arr1[i])) {
      remaining.push(arr1[i]);
    }
  }

  // loop through original array and find values that match first element
  // inside the key, then pop off the beginning element in the key
  // keep doing this until key length is equal to zero
  while (arr2.length) {
    for (let j = 0; j < arr1.length; ++j) {
      if (arr1[j] === arr2[0]) {
        found.push(arr1[j]);
      }
    }
    arr2.shift();
  }
  // sort the remaingin array and concat with found array
  remaining.sort((a, b) => a - b);
  return [...found, ...remaining];
};

const arr1 = [2,3,1,3,2,4,6,7,9,2,19];
const arr2 = [2,1,4,3,9,6];

console.log(relativeSortArray(arr1, arr2)); // [2,2,2,1,4,3,3,9,6,7,19]