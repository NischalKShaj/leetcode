// 520. Detect Capital

var detectCapitalUse = function (word) {
  return (
    word === word.toUpperCase() || word.slice(1) === word.slice(1).toLowerCase()
  );
};

const word = "FlAG";
const result = detectCapitalUse(word);
console.log(result);
