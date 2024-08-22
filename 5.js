var longestPalindrome = function (s) {
  if (s.length < 1) {
    return "";
  }
  let start = 0,
    end = 0;
  // defining a helper function
  const helperFunction = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };

  for (let i = 0; i < s.length; i++) {
    let oddPalindrome = helperFunction(s, i, i);
    let evenPalindrome = helperFunction(s, i, i + 1);
    let maximum = Math.max(oddPalindrome, evenPalindrome);

    if (maximum > end - start) {
      start = i - Math.floor((maximum - 1) / 2);
      end = i + Math.floor(maximum / 2);
    }
  }
  return s.substring(start, end + 1);
};

let s = "ac";
let result = longestPalindrome(s);
console.log("result", result);
