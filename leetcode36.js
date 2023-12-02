var xorOperation = function (n, start) {
  let num = 0;
  for (let i = 0; i < n; i++) {
    num ^= start + 2 * i;
  }
  return num;
};
const n = 5;
const start = 0;
const result = xorOperation(n, start);
console.log(result);
