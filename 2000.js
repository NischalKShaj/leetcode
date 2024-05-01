// reverse prefix of word

var reversePrefix = function (word, ch) {
  if (!word.includes(ch)) {
    return false;
  }
  let index = word.indexOf(ch);
  let prefix = word.slice(0, index + 1);
  let suffix = word.slice(index + 1);
  let reversedPre = prefix.split("").reverse().join("");
  let revPre = reversedPre + suffix;
  return revPre;
};

const word = "abcdefd";
const ch = "d";
const result = reversePrefix(word, ch);
console.log(result);
