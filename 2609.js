var findTheLongestBalancedSubstring = function (s) {
  let maxLength = 0;
  let openCount = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      if (openCount !== 0) {
        openCount = 0;
        count = 0;
      }
      count++;
    } else {
      openCount++;
      if (count !== 0) {
        maxLength = Math.max(maxLength, 2 * Math.min(openCount, count));
      }
    }
  }
  return maxLength;
};

const s = "001";
const result = findTheLongestBalancedSubstring(s);
console.log(result);
