// WEEK 1. My head function which returns the first item in the array.

//  QUE HACE? Retrieve the first element from the array. 

// DIA 1. AssertEqual is no longer defined. We should require this function from the other file/module.

// I ADDED THE REQUIRE LINE TO CALL MY ASSERT EQUAL FILE (other/el primero)

const assertEqual = require('./assertEqual');

// FUNCTION HEAD WHERE HEAD IS IS BEING CALLED

function head(array) {
  const number = array[0];
  return number;
}


// WEEK 2. DAY 1. ELIMINO ESTA FUNCION PARA LLAMAR MI ASSERT EQUAL USANDO REQUIRE.

// PREVIOUS FUNCTION IMPLEMENTATION

//const assertEqual = function (actual, expected) {
//  if (actual === expected) {
//    console.log(`Assertion Passed ❤  : ${actual} === ${expected}`)
//  } else {
//    console.log(`Assertion Failed ⛔ : ${actual} !== ${expected}`);
//  }
//};


// WEEK 2. DAY 1 | NOTAR QUE MI UNICO CODIGO QUE ESTA SIENDO USADO PERO NO EXPORTADO ES MI TEXT CODE QUE HICE EN WEEK 1. 
//TEST CODE
assertEqual(head([5,3,5]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hi');
assertEqual(head([2, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Boot", "Mug"]), "Boot");
assertEqual(head([6, 10]), 6);

module.exports = assertEqual;



module.exports = head;

