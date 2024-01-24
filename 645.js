var findErrorNums = function (nums) {
  let arr = [];
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (!arr.includes(nums[i])) {
      arr.push(nums[i]);
    } else {
      res.push(nums[i]);
    }
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      res.push(i);
    }
  }
  return res;
};
const arr = [1, 2, 2, 4];
const result = findErrorNums(arr);
console.log(result);
