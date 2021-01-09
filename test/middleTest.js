
//const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

const middle = require('../middle');


// MOCHA AND CHAI

describe("#middle", () => {
  it("Return an empty array when a array has 1 or 2 elements", () => {
    assert.deepEqual(middle([1, 2]), [] ); // 1 actua  y 2 expected deep es parte de chai
  });

  it("Returns a single element when an array has odd number of elements", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); // 1 actua  y 2 expected deep es parte de chai
  });

  it("Returns the two middle elements when an array has an even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); // 1 actua  y 2 expected deep es parte de chai
  });

  //it("returns '5' for ['5']", () => {
  //  assert.strictEqual(head(['5']), '5');
  //});

});


module.exports = assertArraysEqual;

module.exports = middle;