// ====================>Is Subsequence<==================//

var isSubsequence = function (s, t) {
  let count = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[count] === t[i]) {
      count++;
    }
  }
  return count === s.length;
};
const s = "abc";
const t = "ahbgdc";
const result = isSubsequence(s, t);
console.log(result);