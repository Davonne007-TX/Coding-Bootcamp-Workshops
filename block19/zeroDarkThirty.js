//Block 19: Javascript Review

/*
    Zero Dark Thirty:

    Write a function zeroDarkThirty that accepts a number as an argument.

    zeroDarkThirty should return a number with all of the zeroes removed:

    zeroDarkThirty(102302) // => 1232
    zeroDarkThirty(606.203) // => 66.23

    If the number 0 is passed in as the argument, return NaN.

    zeroDarkThirty(0) // => NaN

*/

function zeroDarkThirty(number) {
    if(number === 0) {
      return NaN;
    }
    
    let numberString = number.toString();
    let resultString = numberString.replace(/0/g, "");
    
    let result = parseFloat(resultString);
    
    return result;
  
  } 
  
  
  
  
  