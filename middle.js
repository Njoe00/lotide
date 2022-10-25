const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const middle = function (array1) {
  if(array1.length <= 2) {
    return [];
  } else if (array1.length % 2 === 0) {
      return [array1[Math.ceil(array1.length/2) -1], array1[Math.ceil(array1.length/2)]];
  } else {
      return Math.ceil(array1.length/2);
    }
};

module.exports = middle;
