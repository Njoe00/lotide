const countOnly = function(allItems, itemsToCount) {
  const results = [];
  for (const item of allItems) {
    console.log(item);
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Aseertion Failed: ${actual} !== ${expected}`);
  }
  
};
  
  
const firstNames = [
  'karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'kavith',
  'Jason',
  'Samila',
  'Fang',
  'Joe',
];
  
const result1 = countOnly(firstNames,{'Jason': true, 'Karmia': true, 'Fang': true, 'Agouhanna': false});
assertEqual(result1['Jason'], 1);
assertEqual(result1['Karmia'], undefined);
assertEqual(result1['Fang'], 2);
assertEqual(result1['Agouhanna'], undefined);


module.exports = countOnly;