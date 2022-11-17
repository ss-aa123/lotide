const assertEqual = function(actual, expected) {
  let compare = actual === expected;
  if (compare) {
    console.log(`👽👽👽 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const results = {};
  for (let letter of sentence) {
    if (letter !== ' ') {
      results[letter] ? results[letter] += 1 : results[letter] = 1;
    }
  }
  return results;
};
// TEST CODE
console.log(countLetters("lighthouse in the house"));
