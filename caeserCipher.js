// Time Complexity -  O(N)
// Space Complexity - O(N)

function caesarCipherEncryptor(string, key) {
  // create array of alphabet
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let result = '';

  // loop through each letter, and add key to current index to shift letters
  // mod 26 in order to get correct position in case position and key go over 26
  for (let i = 0; i < string.length; i++) {
    const position = alphabet.indexOf(string[i]);
    result += alphabet[(position + key) % 26];
  }
  return result;
}

console.log(caesarCipherEncryptor('xyz', 2)); // zab