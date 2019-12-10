/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

  let minimumBuyPrice = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(profit, prices[i] - minimumBuyPrice);
    minimumBuyPrice = Math.min(minimumBuyPrice, prices[i]);
  }
  return profit;
};

console.log(maxProfit([6, 2, 3, 1])); // 1