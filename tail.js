

const assertEqual = require('./assertEqual');


let tail = function (index) {
  return index.slice(1);
};

// MY ASSERT EQUAL FUNCTION IMPLEMENTATION

//const assertEqual = function (actual, expected) {
//  if (actual === expected) {
//    console.log(`Assertion Passed ❤ : ${actual} === ${expected}`)
//  } else {
//    console.log(`Assertion Failed ⛔ : ${actual} !== ${expected}`);
//  }

//};

//TEST CODE

// Test Case: Checar my lista original 

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no necesito capturar el valor de retorno porque no lo estamos revisando 

assertEqual(words.length, 3); // my lista original deberia de tener mis tres elementos. Hurray!!

// Code Test 2

const words2 = ["The Quenn", "Gambit"];
tail(words2);

assertEqual(words2.length, 1);


// AGREGADO APENAS

module.exports = assertEqual;

module.exports = tail;