// Time Complexity - O(N + M)
// Space Complexity - O(N)

function sumTwoStrings(str1, str2) {

  // ensure str2 is longer
  if (str1.length > str2.length) {
    const temp = str1;
    str1 = str2;
    str2 = temp;
  }

  // declare variables
  let sum = "";
  let carry = 0;
  str1 = reverseString(str1);
  str2 = reverseString(str2);

  // calculate sum of current digits and carry
  for (let i = 0; i < str1.length; i++) {
    const twoDigitSum = str1[i] - 0 + (str2[i] - 0) + carry;

    sum += (twoDigitSum % 10) + "";
    carry = Math.floor(twoDigitSum / 10);
  }

  // add remaining digits in str2
  for (let j = str1.length; j < str2.length; j++) {
    const twoDigitSum = str2[j] - 0 + carry;
    sum += (twoDigitSum % 10) + "";
    carry = Math.floor(twoDigitSum / 10);
  }

  // add remaining carry
  if (carry > 0) {
    sum += carry + "";
  }

  // reverse back and return
  return reverseString(sum);
}

function reverseString(string) {
  return string
    .split("")
    .reverse()
    .join("");
}

console.log(sumTwoStrings("100000000000000000000000000000000000", "100000000000000000000000000000000000"));
