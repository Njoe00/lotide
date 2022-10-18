const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Aseertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function(array) {
  array.slice(1);
    
};

const words = ['yo yo', 'Lighthouse', 'labs'];
tail(words);
assertEqual(words.length, 3);