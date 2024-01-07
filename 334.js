// ============>Increasing Triplet Subsequence<=============== //
var increasingTriplet = function (nums) {
  let first = Infinity;
  let second = Infinity;
  for (let current of nums) {
    if (current > second) {
      return true;
    }
    if (current > first) {
      second = current;
    } else {
      first = current;
    }
  }
  return false;
};
const nums = [1, 2, 3, 4, 5];
const result = increasingTriplet(nums);
console.log(result);
