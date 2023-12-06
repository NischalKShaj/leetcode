var countEven = function (num) {
  let count = 0;
  let c;
  let rem;

  for (let i = 2; i <= num; i++) {
    c = i;
    let sum = 0;
    while (c > 0) {
      rem = c % 10;
      sum += rem;
      c = Math.floor(c / 10);
    }
    if (sum % 2 === 0) {
      count++;
    }
  }
  return count;
};
const num = 30;
const result = countEven(num);
console.log(result);
