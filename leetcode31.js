var countCharacters = function (words, chars) {
  sum = 0;
  chars = chars.split("").sort().join("");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    word = word.split("").sort().join("");
    let valid = true;
    for (let char of word) {
      if (!chars.includes(char)) {
        valid = false;
        break;
      } else {
         chars = chars.replace(char, ""); 
      }
    }
    if (valid) {
      sum += word.length;
    }
  }
  return sum;
};
const words = ["cat","bt","hat","tree"];
const chars = "atach";
const result = countCharacters(words, chars);
console.log(result);
