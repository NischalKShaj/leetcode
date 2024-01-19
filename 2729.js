var isFascinating = function (n) {
  let o = n * 2;
  let p = n * 3;
  let m = n.toString() + o.toString() + p.toString();
  m = m
    .split("")
    .sort((a, b) => a - b)
    .join("");
  console.log(m);
  if (m === "123456789") {
    return true;
  } else {
    return false;
  }
};
const n = 100;
const result = isFascinating(n);
console.log(result);
