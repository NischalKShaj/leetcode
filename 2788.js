var splitWordsBySeparator = function (words, separator) {
    console.log(words.join(separator).split(separator).filter(String));
};
let words = ["one.two.three", "four.five", "six"];
let separator = ".";
let result = splitWordsBySeparator(words, separator);
