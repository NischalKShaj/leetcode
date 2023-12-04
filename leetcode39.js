var largestGoodInteger = function (num) {
  let good = "";
  for (let i = 0; i <= num.length - 3; i++) {
    const subStr = num.substring(i, i + 3);
    if (goodStr(subStr) && subStr > good) {
      good = subStr;
    }
  }
  return good;
};

let goodStr = function (substring) {
  return substring[0] === substring[1] && substring[1] === substring[2];
};
const num = "6777133339";
const result = largestGoodInteger(num);
console.log(result);
