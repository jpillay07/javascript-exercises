const sumAll = function() {

    let sum = 0; //Variable to hold the sum

    let biggest = 0;//Variable to hold the largest number

    let smallest = 0;//Variable to hold the smnallest number

    if(!(typeof arguments[0] === "number")){//Check to see if the first argument is indeed a number
        return "ERROR";
    }

    if(!(typeof arguments[1] === "number")){//Check to see if the second number is indeed a number
        return "ERROR";
    }

    if(arguments[0] < 1){//Check to see if the first argument is non-negative
        return "ERROR";
    }

    if(arguments[1] < 1){//Check to see if the second number is non-negative
        return "ERROR";
    }

    if(arguments[0] > arguments[1]){//Determine which of the arguments passed is the bigger number
        biggest = arguments[0];
        smallest = arguments[1];
    }
    else{
        biggest = arguments[1];
        smallest = arguments[0];
    }

    for (let i = smallest; i <= biggest; i++){//Sum all the numbers between the smallest number and the biggest number
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
