var maxSubsequence = function(nums, k) {
    nums = nums.map((n,i) => [i, n])
    
    nums.sort((a,b) => b[1] - a[1])
	
    let arr = nums.slice(0, k)
    let res = []
    
    for(let i of arr) {
        res[i[0]] = i[1]
    }
    
    return res.filter(i=>i !== undefined)
};
const nums = [50,-75]
const k = 2;
const number = maxSubsequence(nums, k)
console.log(number);