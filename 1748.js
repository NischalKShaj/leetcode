var sumOfUnique = function(nums) {
    let hashTable = {};
    let sum = 0;
    let arr = [];

    for (let i = 0; i < nums.length; i++) {
        let count = nums[i];
        console.log(count);
        hashTable[count] = (hashTable[count] || 0) + 1;
    }

    for (let key in hashTable) {
        if (hashTable[key] === 1) {
            arr.push(Number(key)); // Convert key to a number before pushing
            sum += Number(key);
        }
    }

    console.log(arr);
    console.log(sum);
    console.log(hashTable);
};

const num = [1,2,2,3];
const result = sumOfUnique(num)