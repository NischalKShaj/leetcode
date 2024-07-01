// to find the three consecutive odd numbers
var threeConsecutiveOdds = function (arr) {
  let status = false;
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0) {
      status = true;
      break;
    }
  }
  return status;
};
const arr = [1, 2, 34, 3, 4, 5, 7, 23, 12];
const result = threeConsecutiveOdds(arr);
console.log(result);
