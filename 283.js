// ====================> Move zeros <=================== //
var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === 0) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums;
};
const nums = [0, 1, 0, 3, 12];
const result = moveZeroes(nums);
console.log(result);
