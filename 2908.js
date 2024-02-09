var minimumSum = function (nums) {
  let sum = Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] < nums[j] && nums[k] < nums[j]) {
          let sums = nums[i] + nums[j] + nums[k];
          sum = Math.min(sums, sum);
        }
      }
    }
  }
  return sum < Infinity ? sum : -1;
};
const nums = [8, 6, 1, 5, 3];
const result = minimumSum(nums);
console.log(nums);
