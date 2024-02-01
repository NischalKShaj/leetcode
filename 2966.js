var divideArray = function (nums, k) {
    let arr =[]
    nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length;i+=3){
        if(nums[i+2]-nums[i]>k){
            return [];
        } else{
            arr.push([nums[i], nums[i + 1], nums[i + 2]]);
        }
    }
    console.log(arr);
};
const nums = [1, 3, 4, 8, 7, 9, 3, 5, 1];
const k = 3;
const result = divideArray(nums, k)