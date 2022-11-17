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

const middle = function(arr) {
  let mid = [];
  if (arr.length <= 2) {
    return mid;
  } else {
    if (arr.length % 2 === 0) {
      let middleindex = arr.length / 2;
      mid.push(arr[middleindex - 1], arr[middleindex]);
    } else if (arr.length % 2 === 1) {
      let middleindex = (arr.length - 1) / 2;
      mid.push(arr[middleindex]);
    }
  }
  return mid;
};

// TEST CODE
console.log(
  middle([1]), // => []
  middle([1, 2]), // => []

  middle([1, 2, 3]), // => [2]
  middle([1, 2, 3, 4, 5]), // => [3]

  middle([1, 2, 3, 4]), // => [2, 3]
  middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
);

// TESTING OTHER FUNCTIONS WITH THE MIDDLE FUNCTION
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);