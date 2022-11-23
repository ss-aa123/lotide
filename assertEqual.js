// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let compare = actual === expected;
  if (compare) {
    console.log(`👽👽👽 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertEqual;



