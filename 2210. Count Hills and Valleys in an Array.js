var countHillValley = function (nums) {
  let count = 0;
  let first = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (
      (first < nums[i] && nums[i] > nums[i + 1]) ||
      (first > nums[i] && nums[i] < nums[i + 1])
    ) {
      count++;
      first = nums[i];
    }
  }
  return count;
};
const nums = [6, 6, 5, 5, 4, 1];
const result = countHillValley(nums);
console.log(result);
