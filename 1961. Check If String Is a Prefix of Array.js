var isPrefixString = function (s, words) {
  let compare = "";
  for (let i = 0; i < words.length; i++) {
    compare = compare + words[i];
    if (compare === s) {
      return true;
    }
  }
  return false;
};

const words = ["i", "love", "leetcode", "apples"];
const s = "iloveleetcode";

const result = isPrefixString(s, words);
console.log(result);
