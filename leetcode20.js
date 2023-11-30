var sortedSquares = function (nums) {
  let number = [];
  for (let i = 0; i < nums.length; i++) {
    number.push(Math.pow(nums[i], 2));
  }
  return number.sort((a,b)=>a-b)
};
const nums = [-4, -1, 0, 3, 10];
const result = sortedSquares(nums);
console.log(result);
