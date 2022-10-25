const assertEqual = function(object, object2) {
  if (findKeyValue(object, object2)) {
    console.log(`✅ Assertion Passed: ${object} === ${object2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${object} !== ${object2}`);
  }
};

const findKeyValue =  function(object, object2) {
  for (const key in object) {
    if (object[key] === object2) {
      return [key];
    }
  }
  return undefined;
};



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
  
assertEqual(findKeyValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyValue(bestTVShowsByGenre, "That '70s Show"), undefined);


module.exports = findKeyValue;