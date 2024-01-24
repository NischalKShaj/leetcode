var isHappy = function (n, seen = new Set()) {
  if (n === 1) {
    return true;
  }
  if (seen.has(n)) {
    return false;
  }
  seen.add(n);
  let num = n.toString().split("").map(Number);
  let sum = num.reduce((acc, curr) => acc + Math.pow(curr, 2), 0);
  return isHappy(sum, seen);
};

const n = 2;
const result = isHappy(n);
console.log(result);
