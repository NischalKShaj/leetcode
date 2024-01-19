var isPalindrome = function(s) {
    const str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    for(let i=0;i<str.length;i++){
        if(str[i]!==str[str.length-i-1]){
            return false;
        }
    }
    return true;
};
let s = "A man, a plan, a canal: Panama";
let result = isPalindrome(s)
console.log(result);