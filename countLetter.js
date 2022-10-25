
function countLetters(str) {
  var noSpaces = str.split(" ").join("");
  console.log(noSpaces);
  charCount = {};

  for (var i= 0; i < noSpaces.length; i++) {
    if (charCount[noSpaces[i]]) {
      charCount[noSpaces[i]] += 1;
    } else {
      charCount[noSpaces[i]] = 1;
      }

  }
      console.log(charCount);
}




const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑 Aseertion Failed: ${actual} !== ${expected}`);
    }
    
  };

assertEqual(countLetters('LHL'));
assertEqual(countLetters("lighthouse in the house"));

module.exports = countLetters;