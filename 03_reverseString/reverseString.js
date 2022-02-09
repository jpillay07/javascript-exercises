const reverseString = function(unreversedString) {
    let answer = "";

    let holder = unreversedString.split("");

    for(let i = holder.length - 1; i >= 0; i--) {
        answer += holder[i];
    }

    return answer;

};

// Do not edit below this line
module.exports = reverseString;
