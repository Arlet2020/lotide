/**
 * Our assertEqual function can only compare primitive values. 
 * 
 * We ran into this issue when comparing arrays and ended up implementing assertArraysEqual, if you recall. 
 * 
 * The same will need to be done with objects to make our test code cleaner. Until we have that specialized assertion function, we will do it this, more cumbersome way.
 */


// MY ASSERT FUNCTION PARA VERIFICAR AFIRMACIONES

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed ❤ : ${actual} === ${expected}`)
  } else {
    console.log(`Assertion Failed ⛔: ${actual} !== ${expected}`);
  }

};










// STEP 1. DEFINICION DE LA FUNCION

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function (object1, object2) {
  // return eqObjects // este lo puse porque me salia este resultado Assertion Passed ❤ : undefined === undefined y Assertion Passed ❤ : undefined === undefined
};


// STEP 2.  Primitives As Values (Tests)

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

//TEST CODE

assertEqual(eqObjects(ab, ba));
assertEqual(eqObjects(ab, abc));