// reverse a string that is to reverse the words in the string

var reverseWord = function (s) {
  let str = s.split(" ").filter((word) => word !== "");
  str.reverse();
  let rev = str.join(" ");
  return rev;
};
var reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(" ");
};
const result = reverseWords("a good   example");
console.log(result);
const ans = reverseWord("a good  exapmle");
console.log(ans);
