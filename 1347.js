var minSteps = function (s, t) {
  let str1 = s.split("");
  let str2 = t.split("");
  let diff = Array(26).fill(0);

  for (let i = 0; i < str1.length; i++) {
    diff[str1[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    diff[str2[i].charCodeAt(0) - "a".charCodeAt(0)]--;
  }

  let count = 0;
  for (let d of diff) {
    count += Math.abs(d);
  }

  return count / 2;
};

const s = "practice";
const t = "leetcode";
const result = minSteps(s, t);
console.log(result);
