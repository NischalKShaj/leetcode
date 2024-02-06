var differenceOfSums = function (n, m) {
  let arr = [];
  let sumNonDiv = 0;
  let sumDiv = 0;
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % m === 0) {
      sumDiv += arr[i];
    } else if (arr[i] % m !== 0) {
      sumNonDiv += arr[i];
    }
  }
  return sumNonDiv - sumDiv;
};
const n = 10;
const m = 3;
let result = differenceOfSums(n, m);
console.log(result);
