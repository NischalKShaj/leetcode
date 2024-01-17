var removeTrailingZeros = function (num) {
  let nums = num.split("");

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === "0") {
      nums.pop();
    } else {
      break;
    }
  }
  return nums.join("");
};
const num = "51230100";
const result = removeTrailingZeros(num);
console.log(result);
