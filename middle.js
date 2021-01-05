// Test Assertion EqArrays Functions

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

//  Assert ArraysEquals Function along with my EqArrays Function

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed ❤: ${actual} === ${expected}`)
  } else {
    console.log(`"Assertion Failed ⛔: ${actual} !== ${expected}`);
  }

};

// MY MIDDLE FUNCTION

const middle = function(array) {
  let middleArray = [];
  if (array.length < 3) {
    //console.log(array);
    return middleArray;
  } 

  let middleOneIndex = Math.floor((array.length - 1 ) / 2);
  //console.log(middleOneIndex);
  //console.log(`This is the middleOneIndex of ${array}: ${array[middleOneIndex]}`);
  var middleOne = array[middleOneIndex]
  //console.log(middleOne);
  middleArray.push(middleOne);
  if (array.length % 2 === 0) {
    let middleTwoIndex = middleOneIndex + 1
    let middleTwo =array[middleTwoIndex]
    //console.log(middleOne, array[middleTwoIndex])
    middleArray.push(middleTwo);

  }
  return middleArray;

  } 

//TEST CODE 

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2])
console.log(middle([1, 2, 3, 4, 5])) // => [3]
 
console.log(middle([1, 2, 3, 4]))
console.log(middle([1, 2, 3, 4, 5, 6]))
//middle([1, 2, 3, 4]) // => [2, 3]
//middle([1, 2, 3, 4, 5, 6]) // => [3, 4]


