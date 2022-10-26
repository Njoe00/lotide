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
  
const eqObjects = function(object1, object2) {
  let obj1 = (Object.keys(object1));
  let obj2 = (Object.keys(object2));
  if (obj1.length !== obj2.length) {
    return false;
  }
  for (const key in object1) {
    if (!Array.isArray(object1[key]) && object1[key] !== object2[key]) {
      return false;
    } else if (Array.isArray(object1[key]) && !eqArrays(object1[key], object2[key])) {
      return false;
    } else if (typeof object1[key] === 'object' && !eqObjects(object1[key], object2[key])) {
      return false;
    }
  
  }
  return true;
};
  
const assertObjectsEqual = function(object1, object2) {
  if (eqObjects(object1, object2)) {
    console.log(`✅ Assertion Passed: ${object1} === ${object2}`);
  } else {
    console.log(`🔴 Assertion Failed: ${object1} !== ${object2}`);
  }

};
  

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);

module.exports = assertObjectsEqual;
    






  