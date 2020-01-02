// Time Complexity -  O(N log N)
// Space Complexity - O(N)

var kClosest = function(points, K) {

  // declare hash table
  const result = [];
  const map = {};

  // loop through array, calculate distance and store as index
  for (let i = 0; i < points.length; ++i) {
    map[i] = calculateDistance(points[i]);
  }

  // sort the distances from least to greatest
  const temp = Object.entries(map).sort((a, b) => a[1] - b[1]);

  // loop through sorted distance and go up to K, pushing into result array
  for (let j = 0; j < K; ++j) {
    const shortestPoint = Number(temp[j][0]);
    result.push(points[shortestPoint]);
  }
  return result;
};

function calculateDistance(coordinate) {
  const x = coordinate[0] ** 2;
  const y = coordinate[1] ** 2;
  return Math.sqrt(x + y);
}
