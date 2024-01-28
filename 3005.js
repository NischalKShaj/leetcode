var maxFrequencyElements = function (nums) {
  let hashmap = {};
  let sum = 0;
  for (let num of nums) {
    hashmap[num] = (hashmap[num] || 0) + 1;
  }
  let max = Math.max(...Object.values(hashmap));
  for (let val in hashmap) {
    if (hashmap[val] === max) {
        sum+=hashmap[val]
    }
  }
  console.log(sum);
  console.log(max);
  console.log(hashmap);
};
const nums = [1, 2, 2, 3, 1, 4];
const result = maxFrequencyElements(nums);
