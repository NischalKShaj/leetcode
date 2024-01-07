// ==========>Product of Array Except Self<============== //
var productExceptSelf = function (nums) {
  let pre = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      pre[i] = 1;
    } else {
      pre[i] = nums[i - 1] * pre[i - 1];
    }
  }
  let suf = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      suf[i] = 1;
    } else {
      suf[i] = nums[i + 1] * suf[i + 1];
    }
  }
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result[i] = pre[i] * suf[i];
  }
  return result;
};
const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result);
