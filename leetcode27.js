var removeAnagrams = function (words) {
  for (let i = 0; i < words.length-1; i++) {
    let first = words[i].split("").sort().join("");
    let second = words[i+1].split("").sort().join("");
    

    if (first === second) {
      words.splice(i + 1, 1);
      i--;
    }
  }
  return words;
};

const words = ["aabb", "baba", "abba", "cd", "cd"];
const result = removeAnagrams(words);
console.log(result);
