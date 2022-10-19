
const assertArraysEqual = function(array1, array2) {
    if(eqArrays(array1, array2)) {
        console.log(`✅ Arrays are equal: ${array1} === ${array2}`);
    } else {
        console.log(`🔴 Arrays are not equal: ${array1} !== ${array2}`);
    }

};


const eqArrays = function(array1, array2) {
    let result;
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        result = true;
      } else {
        return false;
      }
  
    }
    return result;
  };

assertArraysEqual([1, 2, 3], [1, 2, 3])
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]), true);