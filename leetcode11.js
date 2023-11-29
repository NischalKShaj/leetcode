var arrangeCoins = function (n) {
  let flag = 0;
  for (let i = 1; i <= n; i++) {
    flag += i;
    if (flag === n) {
      return i;
    }
    if (flag >= n) {
      return i - 1;
    }
  }
};
const n = 5;

const p = arrangeCoins(n);
console.log(p);
