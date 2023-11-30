var sortArrayByParityII = function (nums) {
  const arr1=[];
  const arr2=[];
  let arr = [];
  nums.sort((a,b)=>a-b)
  for (let i = 0; i < nums.length; i++) {
    if ( i % 2 === 0) {
      arr1.push(nums[i]);
     
    } else {
      arr2.push(nums[i]);
      
    }
  }
  arr= arr1.concat(arr2)
  return arr
};

const nums = [4, 2, 5, 7];
const result = sortArrayByParityII(nums);
