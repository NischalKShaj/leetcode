var lengthOfLastWord = function (s) {
  let str = s.trim().split(" ");
  st = str[str.length-1];
  return st
  
};
const s = "Hello World ";
const result = lengthOfLastWord(s);
console.log(result);