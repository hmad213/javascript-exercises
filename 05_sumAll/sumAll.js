const sumAll = function(num1, num2) {
    if(typeof(num1) !== "number" || typeof(num2) !== "number"){
        return "ERROR";
    }
    if(num1 < 0 || num2 < 0 || num1 % 1 !== 0 || num2 % 1 !== 0){
        return "ERROR";
    }
    let large = num2;
    let small = num1;
    if(num1 > num2){
        large = num1;
        small = num2;
    }
    let sum = 0;
    for(let i = small; i <= large; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
