const takeUntil = function(array, callBack) {
  let results = [];
  for (const arrays of array) {
    if (arrays === callBack) {
      return results;
    } else {
      results.push(arrays);
    }
  } return results;
};


const assertArraysEqual = function(array1, array2) {
    if (eqArrays(array1, array2)) {
      console.log(`✅ Arrays are equal: ${array1} === ${array2}`);
    } else {
      console.log(`🔴 Arrays are not equal: ${array1} !== ${array2}`);
    }
  
  };
  
  
  const eqArrays = function(array1, array2) {
    let result 
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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, -1);
console.log(results1)

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I,ve", "been", "to", "Redwood"];
const results2 = takeUntil(data2, ',');
console.log(results2); 
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", 'to', 'Hollywood']);

module.exports = takeUntil;