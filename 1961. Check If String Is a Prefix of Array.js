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
const s = "iloveleetcode";
const words = ["apples", "i", "love", "leetcode"];
const result = isPrefixString(s, words);
console.log(result);
