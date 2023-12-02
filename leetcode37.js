var frequencySort = function (nums) {
  frequency = {};
  for (let num of nums) {
    frequency[num] = (frequency[num] || 0) + 1;
  }
  nums.sort((a, b) => frequency[a] - frequency[b] || b - a);
  return nums;
};
const nums = [1, 1, 2, 2, 2, 3];
const result = frequencySort(nums);
console.log(result);
