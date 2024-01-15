var maxProfit = function (prices) {
  let profit = 0;
  let minPrice = Number.MAX_VALUE;
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    profit = Math.max(profit, prices[i] - minPrice);
  }
  return profit;
}
const prices = [7, 1, 5, 3, 6, 4];
const result = maxProfit(prices);
console.log(result);
