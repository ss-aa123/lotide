const eqArrays = require('./eqArrays');


const assertArraysEqual = function(arr1, arr2) {
  let answer = eqArrays(arr1,arr2);
  if (answer) {
    console.log(`👽👽👽 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


module.exports = assertArraysEqual;