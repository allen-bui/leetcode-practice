// Time Complexity: O(N log(N) + M log(M))
// Space Complexity: O(1)

function smallestDifference(arrayOne, arrayTwo) {

  // sort two arrays
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  // assign variables
  let idxOne = 0;
  let idxTwo = 0;
  let current = Infinity;
  let smallestSum = Infinity;
  let smallestPair = [];

  // loop through both
  while ((idxOne < arrayOne.length) && (idxTwo < arrayTwo.length)) {

    let firstNum = arrayOne[idxOne];
    let secondNum = arrayTwo[idxTwo];

    // return if two numbers are equal
    if (firstNum === secondNum) {
      return [firstNum, secondNum];
    }

    // move left array forward if first number is less than second and vice versa,
    //since moving second number will be further away from zero
    else if (firstNum < secondNum) {
      current = secondNum - firstNum;
      idxOne++;
    }
    else if (firstNum > secondNum) {
      current = firstNum - secondNum;
      idxTwo++;
    }

    // if current is less than smallest sum, then update smallest pair
    if (current < smallestSum) {
      smallestSum = current;
      smallestPair[0] = firstNum;
      smallestPair[1] = secondNum;
    }

  }
  return smallestPair;
}