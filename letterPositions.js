
// EQARRAYS FUNCTION

function eqArrays(string, string) {  //does work for us, compare equality
  if (string.length !== string.length) {
    return false;
  }
  for (let i = 0; i < string.length; i++) { //check item at same index if the same; not nested for loop, not need both 1 and 2
    if (string[i] !== string[i]) {  //end condition is not equal
      return false;
    }
  }
  return true; //return boolean
}


// Implement a function called letterPositions.

const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  return results;
};



// ASSERT ARRAYS EQUAL

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed ❤: ${actual} === ${expected}`)
  } else {
    console.log(`"Assertion Failed ⛔: ${actual} !== ${expected}`);
  }

};



 // TEST CODE 

assertArraysEqual(("hello"), [1]);