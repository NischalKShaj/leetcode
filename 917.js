// Reverse only letters

var reverseOnlyLetters = function (s) {
  const regex = /^[a-zA-Z]$/;
  let arr = s.split("");
  let start = 0,
    end = arr.length - 1;
  while (start < end) {
    if (!regex.test(arr[start])) {
      start++;
    } else if (!regex.test(arr[end])) {
      end--;
    } else {
      let temp = arr[end];
      arr[end] = arr[start];
      arr[start] = temp;
      start++;
      end--;
    }
  }
  return arr.join("");
};

let s = "ab-cd";
let result = reverseOnlyLetters(s);
console.log(result);
