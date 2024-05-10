// 507 perfect number

var checkPerfectNumber = function (num) {
  let divisor = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      if (num / i === i) {
        divisor.push(i);
      } else {
        divisor.push(i);
        divisor.push(Math.floor(num / i));
      }
    }
  }
  divisor = divisor.filter((number) => number !== num);
  divisor.sort((a, b) => a - b);
  let sum = divisor.reduce((prev, acc) => prev + acc, 0);
  return sum === num;
};

const num = 28;
const res = checkPerfectNumber(num);
console.log(res);
