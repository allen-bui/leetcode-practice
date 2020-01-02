var kClosest = function(points, K) {

  const result = [];
  const map = {};

  for (let i = 0; i < points.length; ++i) {
    map[i] = calculateDistance(points[i]);
  }

  const temp = Object.entries(map).sort((a, b) => a[1] - b[1]);

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
