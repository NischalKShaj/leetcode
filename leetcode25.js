var arrayStringsAreEqual = function(word1, word2) {
    const word = word1.join("")
    const words = word2.join("")
    if(word === words){
        return true
    } else {
        return false
    }
};
const word1= ["abc", "d", "defg"]
const word2=["abcddefg"]
const result = arrayStringsAreEqual(word1,word2)
console.log(result);