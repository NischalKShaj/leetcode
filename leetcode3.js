let s1 = "this apple is sweet" 
let s2 = "this apple is sour"

let word1 = s1.split(" ")
let word2 = s2.split(" ")

for(let i =0;i<word2.length;i++){
    if(word1[i]!==word2[i]){
        console.log([word1[i],word2[i]]);
    }
}