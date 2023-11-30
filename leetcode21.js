var addToArrayForm = function (num, k) {
    
  let arr = num.join("");
  arr = BigInt(arr)
 
  let sum =arr+BigInt(k)
  
  let res =sum.toString().split("").map(Number)
  return res;
 
};

const num = [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3];
const k = 516;
const result = addToArrayForm(num, k);
console.log(result);
