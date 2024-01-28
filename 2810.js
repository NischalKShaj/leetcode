var finalString = function (s) {
  let res = []
  for(let i=0;i<s.length;i++){
    if(s[i]==="i"){
        res.reverse()
    } else {
        res.push(s[i])
    }
  }
  console.log(res.join(""));
};
const s = "string";
const result = finalString(s);
