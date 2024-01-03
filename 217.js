var containsDuplicate = function (nums) {
  let num = nums.sort((a, b) => a - b);
  for (let i = 0; i < num.length; i++) {
    if (num[i] === num[i + 1]) {
      return true;
    }
  }
  return false;
};
const nums = [1, 2, 3, 1];
const result = containsDuplicate(nums);
console.log(result);
