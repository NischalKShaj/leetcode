// ===========>Determine if String Halves Are Alike<================ //
var halvesAreAlike = function (s) {
  let str = s.toLowerCase();
  let mid = Math.floor(str.length / 2);
  let leftStr = str.slice(0, mid);
  let rightStr = str.slice(mid);
  let leftCount = 0;
  let rightCount = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < leftStr.length; i++) {
    if (vowels.includes(leftStr[i])) {
      leftCount++;
    }
    if (vowels.includes(rightStr[i])) {
      rightCount++;
    }
  }
  return leftCount === rightCount;
};
const s = "book";
const result = halvesAreAlike(s);
console.log(result);
