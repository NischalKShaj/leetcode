// Delete Characters to Make Fancy String

var makeFancyString = function (s) {
  s = s.split("");
  let res = [];
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    if (i > 0 && s[i] === s[i - 1]) {
      count++;
    } else {
      count = 1;
    }
    if (count <= 2) {
      res.push(s[i]);
    }
  }
  return res.join("");
};

const str = "leeetcode";
const result = makeFancyString(str);
console.log(result);
