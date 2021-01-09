
const assertEqual = require('./assertEqual');



function eqArrays(array1, array2) {  //does work for us, compare equality
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) { //check item at same index if the same; not nested for loop, not need both 1 and 2
    if (array1[i] !== array2[i]) {  //end condition is not equal
      return false;
    }
  }
  return true; //return boolean
}



const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed ❤: ${actual} === ${expected}`)
  } else {
    console.log(`"Assertion Failed ⛔: ${actual} !== ${expected}`);
  }

};

module.exports = assertArraysEqual;

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1, 1, 3], [1, 2, 3]);

// Second TEST CODE

assertArraysEqual([1, 2, 3], ["Hola", 'Hola', "Mio"]);
assertArraysEqual([1, 1, 3], [1, 1, 3]);



module.exports = assertEqual;



module.exports = assertArraysEqual;