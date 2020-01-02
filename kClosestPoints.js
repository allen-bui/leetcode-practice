// Time Complexity -  O(N log N)
// Space Complexity - O(1)

var kClosest = function(points, K) {
  // sort by shortest distance, and return sliced array from 0 to K
  return points
    .sort((a, b) => calculateDistance(a) - calculateDistance(b))
    .slice(0, K);
};

function calculateDistance(coordinate) {
  const x = coordinate[0] ** 2;
  const y = coordinate[1] ** 2;
  return Math.sqrt(x + y);
}

console.log(kClosest([[1,3],[-2,2]], 1)); // [[-2, 2]]