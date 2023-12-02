var stringMatching = function (words) {
  let word = new Set();
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (words[i] !== words[j] && words[i].includes(words[j])) {
        word.add(words[j]);
      }
    }
  }
  return arr = [...word];
};
const words = ["mass", "as", "hero", "superhero"];
const result = stringMatching(words);
console.log(result);
