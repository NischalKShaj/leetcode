var numberOfPairs = function (nums) {
  let countPair = 0;
  let countLeft = 0;
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let valid = false;
    for (let j = i + 1; j < nums.length; j++) {
      if (current === nums[j]) {
        valid = true;
        nums.splice(j, 1);
        break;
      }
    }
    if (valid) {
      countPair++;
    } else {
      countLeft++;
    }
  }
  console.log([countPair, countLeft]);
};
const nums = [1, 1];
const result = numberOfPairs(nums);
