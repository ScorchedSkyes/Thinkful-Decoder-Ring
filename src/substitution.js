// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const alpha = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet || alphabet.length !== 26) return false;
    let finalMessage = "";
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet.indexOf(alphabet[i]) !== alphabet.lastIndexOf(alphabet[i])) {
        return false;
      }
    }
    lowerInput = input.toLowerCase();
    if (encode) {
      for (let key of lowerInput) {
        if (alpha.includes(key)) {
          keyIndex = alpha.indexOf(key);
          finalMessage += alphabet[keyIndex];
        } else {
          if (key === " ") {
            finalMessage += key;
          }
        }
      }
      return finalMessage;
    }
    if (!encode) {
      for (let key of lowerInput) {
        if (alphabet.includes(key)) {
          keyIndex = alphabet.indexOf(key);
          finalMessage += alpha[keyIndex];
        } else {
          if (key === " ") {
            finalMessage += key;
          }
        }
      }
      return finalMessage;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
