var majorityElement = function (nums) {
  let n = nums.length;
  let hashTable = {};
  for (let num of nums) {
    hashTable[num] = (hashTable[num] || 0) + 1;
  }
  console.log(hashTable);
  for (let [key, value] of Object.entries(hashTable)) {
    if (value >= n / 2) {
      console.log(key);
    }
  }
};
const nums = [3, 2, 3];
const result = majorityElement(nums);
