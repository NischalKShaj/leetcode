var checkString = function (s) {
    let ss= s.split("").sort().join("")
    return ss == s;
};
const s = "abab";
const result = checkString(s);
console.log(result);

  