// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let compare = actual === expected;
  if (compare) {
    console.log(`👽👽👽 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  return arr.slice(1);
};

//TESTING CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(tail(words).length, 2);
assertEqual(tail(words)[0],"Lighthouse");
assertEqual(tail(words)[1],"Labs");


