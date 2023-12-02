var canBeEqual = function (target, arr) {
  arr.sort((a, b) => a - b);
  target.sort((a, b) => a - b);
  for (let i = 0; i < target.length; i++) {
    console.log(target[i], arr[i]);
    if (target[i] !== arr[i]) {
      return false;
    }
  }
  return true;
};
const target = [392, 360];
const arr = [392, 360];
const result = canBeEqual(target, arr);
console.log(result);
