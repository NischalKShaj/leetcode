var shortestToChar = function (s, c) {
    let str = s.split("")
    console.log(str);
    for(let i=0;i<str.length;i++){
        if(str[i]===c){
            str[i]=0;
        }
        
    }

};
const s = "loveleetcode";
const c = "e";
const result = shortestToChar(s, c);
