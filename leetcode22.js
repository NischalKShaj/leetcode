var largestSumAfterKNegations = function (nums, k) {
  let i = 0;
  while (i < k) {
    nums.sort((a, b) => a - b);
    nums[0] = -nums[0];
    i++;
  }
  return nums.reduce((previous, current) => previous + current, 0);
};

const nums = [4, 2, 3];
const k = 1;
const result = largestSumAfterKNegations(nums, k);
console.log(result);
