let arr = [1,1,2,3]
let ar = []
for(let i=1 ; i<=arr.length; i++){
    if(i%2===0){
        for(let j =0;j<arr[i-2];j++){
            ar.push(arr[i-1])
        }
    }
}
console.log(ar);