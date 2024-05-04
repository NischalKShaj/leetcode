// 476. Number Complement

var findComplement = function (num) {
  const binNum = num.toString(2);
  let complement = "";
  for (let i = 0; i < binNum.length; i++) {
    if (binNum[i] == 1) {
      complement += "0";
    } else {
      complement += "1";
    }
  }
  return parseInt(complement, 2);
};

const num = 5;
const result = findComplement(num);
console.log(result);
