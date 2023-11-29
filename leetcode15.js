var hammingWeight = function (n) {
  let count = 0;
  const str = n.toString(2);
  const arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "1") {
      count++;
    }
  }
  return count;
};
const n = 111111111101;
const result = hammingWeight(n);
console.log(result);
