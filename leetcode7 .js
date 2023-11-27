var isSameAfterReversals = function(num) {
    if(num == 0){
        return true;
    }
    if(num%10==0){
        return false;
    }
    return true;
};

const num = 1800;
const number = isSameAfterReversals(num)
console.log(number);