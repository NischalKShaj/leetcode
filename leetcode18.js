var validMountainArray = function (arr) {
  let decrease = false;
  let increase = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return false;
    } else if (arr[i] < arr[i + 1]) {
      increase = true;

      if (decrease) {
        return false;
      }
    } else {
      decrease = true;
      if (!increase) {
        return false;
      }
    }
  }
  return increase && decrease;
};
const arr = [0, 3,5,5];
const result = validMountainArray(arr);
console.log(result);
