var divideString = function (s, k, fill) {
  const result = [];
  for (let i = 0; i < s.length; i += k) {
    const str = s.slice(i, i + k);
    if (str.length %3===0 ) {
      result.push(str);
    } else {
        result.push(str + fill.repeat(k - str.length));
    }
  }
  return result;
};
const s = "abcdefg";
const k = 3;
const fill = "x";
const re = divideString(s, k, fill);
console.log(re);
