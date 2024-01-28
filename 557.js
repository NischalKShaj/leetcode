var reverseWords = function (s) {
  let arr = [];
  let str = s.split(" ");
  for (let i = 0; i < str.length; i++) {
    let st = str[i].split("").reverse().join("");
    arr.push(st);
  }
  return arr.join(" ");
};
const s = "Mr Ding";
const result = reverseWords(s);
console.log(result);
