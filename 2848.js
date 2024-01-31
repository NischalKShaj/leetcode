var numberOfPoints = function (nums) {
  let set = new Set();
  for (let [start, end] of nums) {
    for (let i = start; i <= end; i++) {
      set.add(i)
    }
  }
  console.log(set.size);
};
const nums = [
  [3, 6],
  [1, 5],
  [4, 7],
];
const result = numberOfPoints(nums);
