const leapYears = function() {

let isLeapYear = false;//Variable to store result

if(arguments[0] % 4 === 0) {
    isLeapYear = true; //If year is divisible by 4, it is a leap year until the following checks
}

if(arguments[0] % 100 === 0) {//If the number is divisible by 100 it is not a leap year unless it is divisible by 400 as well
    if(arguments[0] % 400 === 0){
        isLeapYear = true;
    }
    else{
        isLeapYear = false;
    }
}



return isLeapYear;
}

// Do not edit below this line
module.exports = leapYears;
