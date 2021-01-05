// FUNCTION IMPLEMENTATION



const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed ❤ : ${actual} === ${expected}`)
  } else {
    console.log(`Assertion Failed ⛔: ${actual} !== ${expected}`);
  }

};

//TEST CODE

assertEqual("Bootcampp", "Bootcamp");
assertEqual(6, 6);
