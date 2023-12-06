var numberOfMatches = function (n) {
  let count = 0;
  let reminder = 0;
  while (n > 1) {
    reminder = Math.floor(n / 2);
    count += reminder;
    n = n - reminder;
  }
  return count;
};
const n = 7;
const result = numberOfMatches(n);
console.log(result);
