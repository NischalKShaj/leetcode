var canThreePartsEqualSum = function (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  const av = total / 3;
  let sum = 0,
    count = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === av) {
      count++;
      sum = 0;
    }
  }
  return count >= 3;
};
const arr = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1];
const result = canThreePartsEqualSum(arr);
console.log(result);
