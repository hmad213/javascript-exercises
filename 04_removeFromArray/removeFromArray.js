const removeFromArray = function(arr, ...elements) {
    for(let element of elements){
        let i = 0;
        while(i < arr.length){
            if(arr[i] === element){
                arr.splice(i, 1);
                i--;
            }
            i++;
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
