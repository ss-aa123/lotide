
const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (let key in obj1) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        if (!eqArrays(obj1[key], obj2[key])) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
  //returns true or false based on if the objects match or not
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (actual !== expected) {
    console.log(`😡😡😡 Assertion Failed: ${inspect(ab)} !== ${inspect(ba)}`);
  } else {
    console.log(`👽👽👽 Assertion Passed: ${inspect(ab)} === ${inspect(ba)}`);
  }
};
// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1"};
assertObjectsEqual(eqObjects(ab, ba), true);