/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

  let profit = 0;
  let current = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      current = prices[j] - prices[i];
      profit = Math.max(profit, current);
    }
  }
  return profit;
};