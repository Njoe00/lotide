const without = function(source, itemsToRemove) {
  let newSource = source.filter((source)  => itemsToRemove !== source);
  return newSource;
};

const assertArraysEqual = function(source, itemsToRemove) {
  if (without(source, itemsToRemove)) {
    console.log(`✅ Arrays are equal: ${source} === ${itemsToRemove}}`);
  } else {
    console.log(`🔴 Arrays are not equal: ${source} !== ${itemsToRemove}`);
  }

};


const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']);
assertArraysEqual(words, ['hello', 'world', 'lighthouse']);
