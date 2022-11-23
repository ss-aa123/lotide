const eqArrays = require('./eqArrays'); 
const assertArraysEqual = require('./assertArraysEqual'); 


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

module.exports = middle;
