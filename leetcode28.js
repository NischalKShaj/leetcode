var thirdMax = function(nums) {
    nums.sort((a,b)=>b-a)
    const set = new Set(nums)
    const uniqureArray = [...set]
    if(uniqureArray<3)
    return Math.max(uniqureArray)
    return uniqureArray[2]
};
const nums = [2,2,3,1]
const num = thirdMax(nums)
console.log(num);