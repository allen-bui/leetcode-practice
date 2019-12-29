// Time Complexity - O(N^2)
// Space Complexity - O(N)

var topKFrequent = function(words, k) {

  // declare variables
  const frequency = {};
  const result = [];
  words.sort();

  // loop through each word and count frequency
  words.forEach(word => {
    if (frequency[word] === undefined) frequency[word] = 1;
    else frequency[word] += 1;
  });

  // loop through k times and find the most frequent word, then delete it from hash
  while (k) {

    const max = Math.max(...Object.values(frequency));
    const words = Object.keys(frequency);

    for (let i = 0; i < words.length; ++i) {

      const word = words[i];

      if (frequency[word] === max) {
        result.push(word);
        delete frequency[word];
        break;
      }
    };
    k--;
  }
  return result;
};

console.log(
  topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2)
);
