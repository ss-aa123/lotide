/*
const assertEqual = require('../assertEqual');
const tail = require('../tail');

//TESTING CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(tail(words).length, 2);
assertEqual(tail(words)[0],"Lighthouse");
assertEqual(tail(words)[1],"Labs");
*/


const assert = require('chai').assert;
const tail   = require('../tail');
describe("#tail", () => {
  it("returns 2, 3 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2,3]);
  });

  it("returns '5' for ['5']", () => {
    assert.deepEqual(tail(['5']), '5'); 
  });
});