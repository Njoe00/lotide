// look through an object value and the first truthly
// return key of that key value pair
// else returned undefined
const findKey = function(keys, value) {
  for (let val in keys) {
    console.log('test1', keys[val], 'test2', value(keys[val]));
    if (value(keys[val])) {
      return val;
    }
  }
  return 'sad boi';
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"


module.exports = findKey;