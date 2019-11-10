var depthSum = function(nestedList) {
  return helper(nestedList, 1);

  function helper(list, level) {
    let sum = 0; //reset sum for each depth
    for (let i = 0; i < list.length; i++) {
      if (list[i].isInteger()) {
        sum += list[i].getInteger() * level;
      } else {
        sum += helper(list[i].getList(), level + 1);
      }
    }
    return sum;
  }
};
