// Time Complexity - O(N);
// Space Complexity - O(1);

function isPalindrome(string) {

  // set up two pointers
  let left = 0;
  let right = string.length - 1;

  // move towards the middle while checking letters on both side to make sure it's equal
  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome('racecar')); // true