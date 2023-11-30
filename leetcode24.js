var findSpecialInteger = function (arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
    } else {
      count = 1;
    }
    if (count > arr.length / 4) {
      return arr[i];
    }
  }
};
const arr = [1,1];
const result = findSpecialInteger(arr);
console.log(result);
