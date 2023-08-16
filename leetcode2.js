let s = "ac##"
let t = "c#b#"
let s1
let t1
for(let i =0 ; i<s.length ; i++){
    if(s[i]==="#"){
        s1=s.slice(i,i-1)
        
    }
}
for (let j = 0; j<t.length; j++){
    if(t[j]==="#"){
        t1=t.slice(j,j-1)
        
    }
}

if(s1===t1){
    console.log("true");

}
else{
    console.log("false");
}


