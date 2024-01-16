var chunk = function (arr, size) {
  let newarr = [];
  for (let i = 0; i < arr.length; i+=size) {
    let s = arr.slice(i,i+size);
    console.log(s);
    newarr.push(s);
  }
  console.log(newarr);
};
const arr = [1, 2, 3, 4, 5];
const size = 1;
const result = chunk(arr, size);
