var runningSum = function (nums) {
  let num = [];
  sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    num.push(sum);
  }
  return num;
};
const nums = [1, 2, 3, 4];
const result = runningSum(nums);
console.log(result);
