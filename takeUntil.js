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


const takeUntil = function(array, callback) {
  let newArray = [];
  // loop over each item in the original array,
  // if the current item matches the value given based on the callback argument,
  // then assign a subarray to newArray which contains the original array from pnly index 0 up until the index of the callback argument AKA the current item 
  array.forEach((item, index) => {
    if (callback(item)) {
      newArray = array.splice(0, index);
    }
  });
  // return the new subarray outside of the for loop, so the code doesn't go crazy
  return newArray;
};

// TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1,2,5,7,2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

