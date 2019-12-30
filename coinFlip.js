// Time Complexity -  O(N)
// Space Complexity - O(1)

function coinFlip(n) {
  const data = {
    heads: 0,
    tails: 0,
  };

  for (let i = 0; i < n; ++i) {
    const flip = Math.floor(Math.random() * 100) + 1; // changes range from 0-99 to 1-100

    if (flip <= 50) data.heads += 1;
    else data.tails += 1;
  }
  return data;
}

console.log(coinFlip(1000000));
