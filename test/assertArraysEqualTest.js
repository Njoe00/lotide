const assertArraysEqual = require('../assertArraysEqual.js');




assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual((["1", "2", "3"], ["1", "2", 3]), true);