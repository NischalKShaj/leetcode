var totalMoney = function (n) {
  let week = Math.floor(n / 7);
  let remaining = n % 7;
  let total = ((week * (week - 1)) / 2) * 7;
  total += week * 28;
  total += (remaining * (remaining + 1)) / 2 + week * remaining;
  return total;
};
const n = 4;
const result = totalMoney(n);
console.log(result);