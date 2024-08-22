var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    let str = s[i];
    for (let j = i + 1; j < s.length; j++) {
      if (!str.includes(s[j])) {
        console.log("str", str);
        str = str.concat(s[j]);
      } else {
        break;
      }
    }
    maxLength = Math.max(maxLength, str.length);
  }
  return maxLength;
};

const s = "abcabcbb";
const result = lengthOfLongestSubstring(s);
console.log("result", result);
