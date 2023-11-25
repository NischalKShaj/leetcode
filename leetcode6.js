var mergeTwoLists = function(list1, list2) {
    const list = list1.concat(list2)
    const array = list.sort((a,b)=>a-b);
    return array;
};
const list1 = [1,2,3]
const list2 = [1,3,2]
const result = mergeTwoLists(list1,list2);
console.log(result);