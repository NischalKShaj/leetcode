var findDifference = function(nums1, nums2) {
    const num1 = new Set(nums1)
    const num2 = new Set(nums2)
    for(let item of num1){
        if(num2.has(item)){
            num1.delete(item)
            num2.delete(item)
        }
    }
    return [[...num1],[...num2]]
};
const nums1 = [1,2,3]
const nums2 = [2,4,6]
const result = findDifference(nums1, nums2)
console.log(result);

