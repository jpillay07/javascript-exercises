const removeFromArray = function(theArray) {
    

    for(let i = 1; i <= arguments.length - 1; i++) { //Loop through all the arguments (items that need to be removed from theArray)
        let indexToRemove = theArray.indexOf(arguments[i]); // locate the index of the item that needs to be removed
        if(indexToRemove > -1){// If the item exists, proceed to remove it otherwise do nothing
            theArray.splice(indexToRemove, 1);
        }
    }
    

    return theArray; // return the edited array
};

// Do not edit below this line
module.exports = removeFromArray;
