function flattenArray(userArr) {
  const res = [];
  const helper = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        helper(arr[i]);
      } else {
        res.push(arr[i]);
      }
    }
  };
  helper(userArr);
  return res;
}

console.log(flattenArray([1, 2, [3, 4, [5, 6, [7], [[[8]]]], 9], 10]));
