var findRelativeRanks = function (score) {
  let arr = [...score].sort((a, b) => b - a);
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
  }
  console.log(map);
  for (let i = 0; i < score.length; i++) {
    score[i] = "" + (map.get(score[i]) + 1);
    console.log(score[i]);
    if (score[i] === "1") {
      score[i] = "Gold Medal";
    }
    if (score[i] === "2") {
      score[i] = "Silver Medal";
    }
    if (score[i] === "3") {
      score[i] = "Bronze Medal";
    }
  }
  return score;
};
const score = [10, 3, 8, 9, 4];
const result = findRelativeRanks(score);
console.log(result);
