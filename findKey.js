const assertEqual = function(actual, expected) {
  let compare = actual === expected;
  if (compare) {
    console.log(`👽👽👽 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = function(obj, callback) {
  // loop over each key in the given objects
  // if the current item's (aka key's) value put into the callback argument equals true.
      // which means that it equals the value given by the callback argument 
  // then return that key
  for (let item in obj) {
    if (callback(obj[item])) {
      return item;
    } 
  }
};

assertEqual(findKey ({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma'); // => "noma"