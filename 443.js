var compress = function (chars) {
  let index = 0;
  let count = 1;
  for (let i = 0; i < chars.length; i++) {
    const curr = chars[i];

    if (i === chars.length - 1 || curr !== chars[i + 1]) {
      chars[index] = curr;
      index++;

      if (count > 1) {
        const countStr = count.toString();
        const countLen = countStr.length;
        for (let j = 0; j < countLen; j++) {
          chars[index] = countStr[j];
          index++;
        }
      }
      count = 1;
    } else {
      count++;
    }
  }
  return index;
};

let chars = ["a", "a", "b", "b", "c", "c", "c"];
let result = compress(chars);
console.log("result", result);
