/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
  const map = {};
  const res = [];

  // map student IDs and store their scores
  for (let i = 0; i < items.length; i++) {
    if (map[items[i][0]] !== undefined) {
      map[items[i][0]].push(items[i][1]);
    } else {
      map[items[i][0]] = [items[i][1]];
    }
  }

  // sort scores
  for (let key in map) {
    map[key].sort((a, b) => b - a);
  }

  // get average of top 5 scores and push to results
  for (let key in map) {
    let sum = 0;

    for (let j = 0; j < 5; j++) {
      sum += map[key][j];
    }

    res.push([Number(key), Math.floor(sum / 5)]);
  }
  return res;
};