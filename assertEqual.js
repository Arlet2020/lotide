// FUNCTION IMPLEMENTATION

// QUE HACE ESTE ASSERT? Function that displays assertions

//  Función que muestra afirmaciones

// WEEK 2. DAY 1 | ENERO 11/ 2020
//


const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed ❤ : ${actual} === ${expected}`)
  } else {
    console.log(`Assertion Failed ⛔: ${actual} !== ${expected}`);
  }

};

//TEST CODE

//assertEqual("Bootcampp", "Bootcamp");
//assertEqual(6, 6);

// WEEK 2. DAY 1. ENERO 11 / 2020
// Now let's export the function. We don't need to export the test code, just the function itself.

module.exports = assertEqual;

// ESTOY PASANDO LA VARIABLE ASSERT EQUAL QUE APUNTA HACIA MI FUNCION Y NO ESTOY USANDO ASSERT EQUAL().