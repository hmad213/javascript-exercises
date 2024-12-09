const reverseString = function(userStr) {
    newStr = "";
    for(let i = 0; i < userStr.length; i++){
        newStr += userStr.charAt(userStr.length - i - 1);
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
