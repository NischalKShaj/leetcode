var rotate = function (nums, k) {
  k = k % nums.length;
  nums.unshift(...nums.splice(-k));
};
const nums = [1,2,3,4,5,6,7];
const k = 3;
rotate(nums, k);
console.log(nums);
