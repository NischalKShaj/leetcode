var countElements = function (nums) {
  const max = Math.max(...nums);
  const min = Math.min(...nums);

  return nums.reduce((acc, num) => {
    if (num > min && num < max) {
      return acc + 1;
    }
    return acc;
  }, 0);
};
const nums = [11, 7, 2, 15];
const result = countElements(nums);
console.log(result);
