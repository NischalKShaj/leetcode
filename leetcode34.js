var maxProduct = function (nums) {
  nums = nums.sort((a, b) => a - b);
  const max1 = nums.pop();
  const max2 = nums.pop();
  return (max1 - 1) * (max2 - 1);
};
const nums = [3,4,5,2];
const result = maxProduct(nums);
console.log(result);
