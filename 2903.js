var findIndices = function (nums, indexDifference, valueDifference) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (
        Math.abs(i - j) >= indexDifference &&
        Math.abs(nums[i] - nums[j]) >= valueDifference
      ) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
};
const nums = [0];
const indexDifference = 0;
const valueDifference = 0;
const result = findIndices(nums, indexDifference, valueDifference);
console.log(result);
