var merge = function (nums1, m, nums2, n) {
  const number1 = nums1.sort((a, b) => a - b);
  const arr = number1.filter((val) => val != 0);
  const number2 = nums2.sort((a, b) => a - b);
  const arr2 = number2.filter((val) => val != 0);
  let array;
  for (let i = 0; i < m + n; i++) {
    array = arr.concat(arr2);
    array.sort((a, b) => a - b);
  }
  return array;
};

const m = 3;
const n = 3;
const nums2 = [2, 5, 6];
const nums1 = [1, 2, 3, 0, 0, 0];
const test = merge(nums1, m, nums2, n);
console.log(test);
