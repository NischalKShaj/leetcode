var prefixCount = function(words, pref) {
    return (words.filter(value=>value.startsWith(pref)).length)
};
const words = ["leetcode","win","loops","success"]
const pref = "code"
const result  = prefixCount(words, pref)
console.log(result);