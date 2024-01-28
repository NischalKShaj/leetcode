var buyChoco = function (prices, money) {
  let lowest = Math.min(...prices);
  prices.splice(prices.indexOf(lowest), 1);
  let sum = Math.min(...prices) + lowest;
  if (sum <= money) {
    return money-sum;
  } else {
    return money;
  }
};
const prices = [41, 1, 28, 2, 92, 97, 1, 87];
const money = 68;
const result = buyChoco(prices, money);
console.log(result);
