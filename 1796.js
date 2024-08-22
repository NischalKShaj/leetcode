var secondHighest = function (s) {
  let numArr = [];
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i] && s[i] !== "")) {
      console.log("num", s[i]);
      numArr.push(Number(s[i]));
    }
  }
  const uniqueNumber = [...new Set(numArr)];
  console.log("uniquen", uniqueNumber);
  if (uniqueNumber.length < 2) {
    return -1;
  } else {
    uniqueNumber.sort((a, b) => b - a);
    return uniqueNumber[1];
  }
};
const s = "ck077";
let result = secondHighest(s);
console.log(result);
