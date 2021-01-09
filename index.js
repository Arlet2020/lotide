// index.js

//const _ = require('./index')

const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const takeUntil = require('./takeUntil');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const eqObjects = require('./eqObjects');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const map = require('./map');

module.exports = {
head: head,
tail: tail,
middle: middle,
takeUntil: takeUntil,
map: map,
letterPositions: letterPositions,
findKeyByValue: findKeyByValue,
without: without,
findKey: findKey, 
eqObjects: eqObjects,
eqArrays: eqArrays,
countOnly: countOnly,
countLetters: countLetters,
assertObjectsEqual: assertObjectsEqual,
assertEqual: assertEqual,
assertArraysEqual
};



// NODE TEST