
const assertEqual = require('../assertEqual');

//const head = require('../head');


// MOCHA AND CHAI


const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

});




module.exports = assertEqual;

module.exports = head;


//assertEqual(head([5, 3, 5]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hi');
//assertEqual(head([2, 6, 7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//assertEqual(head(["Boot", "Mug"]), "Boot");
//assertEqual(head([6, 10]), 6);
