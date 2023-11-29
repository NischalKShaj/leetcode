var isMonotonic = function (nums) {
  if (nums.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
const nums = [1,3,2];
const result = isMonotonic(nums)
console.log(result);