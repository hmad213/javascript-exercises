const repeatString = function(userStr, count) {
    let newStr = "";
    if(count < 0){
        return "ERROR";
    }
    for(let i = 0; i < count; i++){
        newStr += userStr;
    }
    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
