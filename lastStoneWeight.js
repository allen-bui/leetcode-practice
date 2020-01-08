/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {

  while (stones.length >= 2) {

    let y = Math.max(...stones);
    stones.splice(stones.indexOf(y), 1);
    let x = Math.max(...stones);
    stones.splice(stones.indexOf(x), 1);

    if (x === y) {
      continue;
    }
    stones.push(y - x);
  }
  return stones.length === 1 ? stones[0] : 0;
};

console.log(lastStoneWeight([2,7,4,1,8,1])); // 1

/*

* Constraints
If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.

* Sample
Input: [2,7,4,1,8,1]
Output: 1
Explanation:
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.
*/