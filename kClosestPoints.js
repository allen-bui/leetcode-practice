var kClosest = function(points, K) {





};

function calculateDistance(coordinate) {

  const x = coordinate[0] ** 2;
  const y = coordinate[1] ** 2;

  return Math.sqrt(x + y);
}

console.log(calculateDistance([-2, 2]));