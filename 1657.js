var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  let arr1 = Array(26).fill(0);
  let arr2 = Array(26).fill(0);
  let code = "a".charCodeAt(0);
  for (let i = 0; i < word1.length; i++) {
    arr1[word1.charCodeAt(i) - code]++;
    arr2[word2.charCodeAt(i) - code]++;
  }
  for (let i = 0; i < arr1.length; i++) {
    if ((!arr1[i] && arr2[i] > 0) || (arr1[i] > 0 && !arr2[i])) {
      return false;
    }
  }
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const word1 = "abcd";
const word2 = "bca";
const result = closeStrings(word1, word2);
console.log(result);
