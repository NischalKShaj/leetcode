var largestOddNumber = function (num) {
  let largestOdd = "";

  for (let i = 0; i < num.length; i++) {
    let currentNum = "";
    for (let j = i; j < num.length; j++) {
      currentNum += num[j];
      if (parseInt(currentNum) % 2 !== 0) {
        // Check if the currentNum is odd
        if (
          currentNum.length > largestOdd.length ||
          (currentNum.length === largestOdd.length && currentNum > largestOdd)
        ) {
          // Update the largestOdd if the currentNum is longer or lexicographically greater
          largestOdd = currentNum;
        }
      }
    }
  }

  return largestOdd;
};
const num = "10133890";
const result = largestOddNumber(num);
console.log(result);
