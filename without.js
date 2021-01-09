// ASSERT EQ ARRAYS
// Function that can compare two arrays for a perfect match

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

// ASSERT ARRAYS EQUAL 
// Function for asserting that two arrays are equal

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed ❤: ${actual} === ${expected}`)
  } else {
    console.log(`"Assertion Failed ⛔: ${actual} !== ${expected}`);
  }

};

// The without function should be returning a NEW ARRAY and not modify the original array that is passed in.

const without = function(source, itemsToRemove) {
const newArray = []
// checar 
for(let item in source) {

  // return boolean es incluido?
  // what to do it isn't there
  // ! if items... is not there bool
  if(!itemsToRemove.includes(source[item])) {
    newArray.push(source[item])
    //console.log(newArray) //updating my new array 
  }
}
return newArray

}

module.exports = without;

// TEST 

const words = ["hello", "world", "Lighthouse"];
const result = without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//evaluate
assertArraysEqual(result, ["hello", "world", "Lighthouse"]);



// 

const words2 = ["FKJ", "Music", "Mimosa"];
const result2 = without(words2, ['Mimosa']);
assertArraysEqual(result2, ["FKJ", "Music"])

// 

const words3 = ["Gansito", "Bubble Bubble", "Roles"];
const results3 = without(words3, ["Tama Roca", "Paleta Payaso"]);
assertArraysEqual(results3, ["Tama Roca", "Chaka Chaka", "Paleta Payaso", "Roles"]);


/// TEST CODE


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]) // => [2, 3]  //source + toRemove
assertArraysEqual(without([1, 2, 3], [2, 3]), [1]) // => [1, 3]  //source + toRemove
assertArraysEqual(without([1, 2, 3], [4]), [1, 2, 3]) // => [1, 2, 3]  //source + toRemove