 /*
 const middle = require('../middle')
 const assertArraysEqual = require('../assertArraysEqual')
 const eqArrays = require('../eqArrays'); 
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
*/

const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), 2);
  });

  it("returns 2, 3 for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2,3]); 
  });
});