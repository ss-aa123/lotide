const assertEqual = require('./assertEqual');


// FUNCTION IMPLEMENTATION

const eqArrays = function(arr1, arr2) {
  let compare = true;
  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      compare = false;
    }
  }
  return compare;
};

module.exports = eqArrays;
