var reverse = function (x) {
  let MAX_INT = 2147483647;
  let MIN_INT = -2147483648;
  let num = x.toString();
  let arr = num.split("");
  let revNum;
  if (arr[0] === "-") {
    let newVal = arr.slice(1).reverse().join("");
    revNum = parseInt(newVal) * -1;
  } else {
    revNum = parseInt(arr.reverse().join(""));
  }
  if (revNum < MIN_INT || revNum > MAX_INT) {
    return 0;
  }
  return revNum;
};

const x = 1230;
const result = reverse(x);
console.log("result", result);
