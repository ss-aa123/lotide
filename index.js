// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const letterPositions = require('./letterPositions');
const without = require('./without');
const takeUntil = require('./takeUntil');
const map = require('./map');

//exporting each function as a key of an object so that when you call that 'key' in this object, it calls that function with the same name. Thus you're able to export or import into a file, that key/function
module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertEqual: assertEqual,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  assertArraysEqual: assertArraysEqual,
  assertObjectsEqual: assertObjectsEqual,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  countOnly: countOnly,
  countLetters: countLetters,
  letterPositions: letterPositions,
  without: without,
  takeUntil: takeUntil,
  map: map

};