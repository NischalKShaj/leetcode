var kidsWithCandies = function (candies, extraCandies) {
  let maxVal = Math.max(...candies);
  let res = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxVal) {
      res.push(true);
    } else {
      res.push(false);
    }
  }
  return res;
};
const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;
const result = kidsWithCandies(candies, extraCandies);
console.log(result);
