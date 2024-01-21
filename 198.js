var rob = function (nums) {
  if (!nums || nums.length === 0) {
    return 0;
  }

  const n = nums.length;
  if (n === 1) {
    return nums[0];
  }

  // Initialize an array to store the maximum amount robbed at each house
  const dp = new Array(n);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  // Iterate through the houses starting from the third one
  for (let i = 2; i < n; i++) {
    // The maximum amount at each house is the maximum of either:
    // 1. The amount robbed at the previous house
    // 2. The amount robbed two houses ago plus the current house
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  // The final element of dp array contains the maximum amount that can be robbed
  return dp[n - 1];
};
const nums = [2, 7, 9, 3, 1];
const result = rob(nums);
console.log(result);
