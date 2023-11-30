var repeatedNTimes = function(nums) {
    let arr = [];
    for(let i=0;i<nums.length;i++){
        for(let j= i+1;j<nums.length;j++){

            if(nums[i]===nums[j]){
                if(!arr.includes(nums[i])){

                    arr.push(nums[i]);
                    nums[i]=-9767;
                }
            }
        }
    }
    return arr;
};
const nums = [5,1,5,2,5,3,5,4]
const result = repeatedNTimes(nums)
console.log(result);
