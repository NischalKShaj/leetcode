var findDisappearedNumbers = function (nums) {
  const arr = [];
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = i + 1;
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!obj[i]) {
      arr.push(i);
    }
  }
  return arr;
};

const nums = [1, 1];
const result = findDisappearedNumbers(nums);
console.log(result);
