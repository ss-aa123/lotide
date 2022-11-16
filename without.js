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
  const answer = eqArrays(arr1,arr2);
  if (answer) {
    console.log(`👽👽👽 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const without = function(source, itemsToRemove) {
  let arr = source;
  for (let i = 0; i <= arr.length; i++) {
    for (let j of itemsToRemove) {
      if (source[i] === j) {
        arr.splice(i, 1);
      }
    } 
  }
  return arr;

}

//TEST CODE
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);