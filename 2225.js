var findWinners = function (matches) {
  const looseCount = {};
  const answer = [[], []];
  for (const [winner, looser] of matches) {
    looseCount[looser] = (looseCount[looser] || 0) + 1;
    looseCount[winner] = looseCount[winner] ?? 0;
  }
  for (const id in looseCount) {
    if (looseCount[id] === 0) {
      answer[0].push(id);
    }
    if (looseCount[id] === 1) {
      answer[1].push(id);
    }
  }
  return answer;
  
};
const matches = [
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [4, 8],
  [4, 9],
  [10, 4],
  [10, 9],
];
const result = findWinners(matches);
console.log(result);
