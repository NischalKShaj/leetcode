var lengthOfLastWord = function (s) {
  let str = s.trim().split(" ");
  st = str[str.length-1]
  console.log(st.length);
  
};
const s = "Hello World ";
const result = lengthOfLastWord(s);
