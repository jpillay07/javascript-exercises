const sumAll = function() {

    let sum = 0;

    let biggest = 0;

    let smallest = 0;

    if(!(typeof arguments[0] === "number")){
        return "ERROR";
    }

    if(!(typeof arguments[1] === "number")){
        return "ERROR";
    }

    if(arguments[0] < 1){
        return "ERROR";
    }

    if(arguments[1] < 1){
        return "ERROR";
    }

    if(arguments[0] > arguments[1]){
        biggest = arguments[0];
        smallest = arguments[1];
    }
    else{
        biggest = arguments[1];
        smallest = arguments[0];
    }

    for (let i = smallest; i <= biggest; i++){
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
