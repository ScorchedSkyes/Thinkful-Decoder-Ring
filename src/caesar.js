// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  // create a variable with the alphabet
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  function caesar(input, shift, encode = true) {
    // establish a guard clause for no shift argument, if shift is above 25 or less then -25 return false
    if (!shift || shift > 25 || shift < -25) return false;
    // create a variable to locer case any input message
    let lowerCaseInput = input.toLowerCase();
    //create a variable with an empty string for the final message
    let finalMessage = "";
    //create a variable named shiftcode checking wether encode is true then shift positive if false shift negative (sets up for decoding)
    const shiftCode = encode ? shift : -(shift)
    //iterate through the variable for lowercase 
    for (let i = 0; i < lowerCaseInput.length; i++) {
      //create a variable name current for my established alphabet at index of the lowercase input[i]
      let current = alpha.indexOf(lowerCaseInput[i]);
      //create an empty variable to refer to later
      let newLetter
      //if current is deeply equal to negative 1
      if (current === -1) {
        //empty variable = input[i]
        newLetter = input[i];
        //else
      } else {
        //create a new variable that is current + shiftcode 
        let newPos = current + shiftCode;
        //if variable above is greater then 25
        if (newPos > 25) {
          //variable -= 26 (to loop back around)
          newPos -= 26;
          //else if variable is less then 0
        } else if (newPos < 0) {
          //variable += 26 (also to loop back around)
          newPos += 26;
        }
        //empty variable = my alphabet[variable above](finish the looping)
        newLetter = alpha[newPos]
      }
      //final message += empty variable(that now has information from above)
      finalMessage += newLetter
    }
    //return final message
    return finalMessage
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
