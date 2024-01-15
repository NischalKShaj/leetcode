var maxProfit = function(prices) {
    minVal = Math.min(...prices)
    console.log(minVal);
    index  = prices.indexOf(minVal)
    console.log(index);
    let arr = [];
    for(let i=index;i<prices.length;i++){
        arr.push(prices[i])
    }
    console.log(arr);
    max = Math.max(...arr)
    console.log(max);
    return max-minVal;
};
const prices = [7,1,5,3,6,4]
const result = maxProfit(prices)
console.log(result);