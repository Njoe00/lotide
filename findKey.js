// look through an object value and the first truthly 
// return key of that key value pair 
// else returned undefined 
const findKey = function (keys, value) {
    keyObj = (Object.keys(keys));
    for(let obj of keyObj) {
        if(keys[obj] === value) {
        return obj;
        }     
    }  
};

console.log(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, 2 )) // => "noma"


  module.exports = findKey;