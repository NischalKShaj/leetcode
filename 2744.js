var maximumNumberOfStringPairs = function (words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      let rev = words[j].split("").reverse().join("");
      if (words[i] === rev) {
        count++;
      }
    }
  }
  console.log(count);
};
let words = ["cd", "ac", "dc", "ca", "zz"]; 
let result = maximumNumberOfStringPairs(words);
