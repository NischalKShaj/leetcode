var maxSum = function (nums) {
  let max = -1;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let currentSum = nums[i] + nums[j];

      if (max < currentSum && maxDigit(nums[i]) === maxDigit(nums[j])) {
        max = currentSum;
      }
    }
  }
  return max;
};

const maxDigit = (num) => {
  let digit = 0;
  let str = num.toString();
  for (let ele of str) {
    digit = Math.max(digit, parseInt(ele));
  }
  return digit;
};
const nums = [51, 71, 17, 24, 42];
const result = maxSum(nums);
console.log(result);
