const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectEqual = require('./assertObjectEqual');
const countLetter = require('./countLetter');
const countOnly = require ('./countOnly');
const eqArrays = require('./eqArrays');
const eqObject = require('./eqObject');
const findKey = require('./findKey');
const findKeyValue = require('./findKeyValue');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
    head: head,
    tail: tail,
    middle: middle,
    assertArraysEqual: assertArraysEqual,
    assertEqual: assertEqual,
    assertObjectEqual: assertObjectEqual,
    countLetter: countLetter,
    countOnly : countOnly,
    eqArrays: eqArrays, 
    eqObject: eqObject,
    findKey: findKey, 
    findKeyValue: findKeyValue,
    letterPositions: letterPositions, 
    map: map, 
    takeUntil: takeUntil,
    without: without
    
};