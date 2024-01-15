var divideArray = function (nums) {
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i = i + 2) {
    if (nums[i] !== nums[i + 1]) {
      return false;
    }
  }
  return true;
};
const nums = [1,2,3,4];
const result = divideArray(nums);
console.log(result);
