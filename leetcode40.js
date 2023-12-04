var getMaximumGenerated = function (n) {
  if (n === 0) {
    return 0;
  }
  const nums = [];
  nums[0] = 0;
  nums[1] = 1;
  for (let i = 0; i < n; i++) {
    if (i * 2 > n) {
      break;
    }
    nums[2 * i] = nums[i];
    if (2 * i + 1 > n) {
      break;
    }
    nums[2 * i + 1] = nums[i] + nums[i + 1];
  }
  return Math.max(...nums)
};
const n = 7;
const result = getMaximumGenerated(n);
console.log(result);
