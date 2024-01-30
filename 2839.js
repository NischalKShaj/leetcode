var canBeEqual = function (s1, s2) {
  for (let i = 0; i < s1.length; i++) {
    if (
      (s1[i] === s2[i] && s1[i + 2] === s2[i + 2]) ||
      (s1[i + 2] === s2[i] && s1[i] === s2[i + 2])
    ) {
    } else {
      return false;
    }
  }
  return true;
};
const s1 = "abcd";
const s2 = "acbd";
const result = canBeEqual(s1, s2);
console.log(result);
