const eqArrays = function(arr1, arr2) {
  let compare = true;
  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      compare = false;
    }
  }
  return compare;
};

const assertArraysEqual = function(arr1, arr2) {
  let answer = eqArrays(arr1,arr2);
  if (answer) {
    console.log(`👽👽👽 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  let count = -1;
  for (let letter of sentence) {
    count++;
    if (letter !== ' ') {
      if (!results[letter]) {
        results[letter] = [];
      }
      results[letter].push(count);
    }
  }
  return results;
};

// TEST CODE
console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);
