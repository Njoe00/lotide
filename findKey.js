const findKey = function(keys, value) {
  for (let val in keys) {
    if (value(keys[val])) {
      return val;
    }
  }
  return false;
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