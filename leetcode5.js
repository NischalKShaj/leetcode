var firstPalindrome = function (words) {
  let word;
  for (let i = 0; i < words.length; i++) {
    let flag = true;
    word = words[i];
    for (let j = 0; j < word.length / 2; j++) {
      if (word[j] !== word[word.length - j - 1]) {
        flag = false;
      }
    }
    if (flag) {
      return word;
    }
  }
  return "";
};
const words = ["notapalindrome", "racecar"];
const final = firstPalindrome(words);
console.log(final);
