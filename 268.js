var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);
  let missingNum;
  let set = new Set(nums);
  for (let i = 0; i <= nums.length; i++) {
    if (set.has(i)) {
      continue;
    } else {
      missingNum = i;
    }
  }
  console.log(missingNum);
};
const nums = [3, 0, 1];
const result = missingNumber(nums);
