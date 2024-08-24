var myAtoi = function (s) {
  let index = 0;
  let isNeg = false;
  let res = 0;

  for (let i = index; i < s.length; i++) {
    if (s[i] === " ") {
      index++;
    } else {
      break;
    }
  }

  if (s[index] == "+" || s[index] == "-") {
    isNeg = s[index] === "-";
    index++;
  }

  for (let i = index; i < s.length; i++) {
    let num = s.charCodeAt(i) - 48;
    if (num < 0 || num > 9) break;

    res = res * 10 + num;
  }

  if (isNeg) {
    res = -res;
  }

  let min = -(2 ** 31);
  let max = 2 ** 31 - 1;

  let minimum = Math.min(max, res);
  return Math.max(minimum, min);
};

let s = " -041";
let result = myAtoi(s);
console.log("result", result);
