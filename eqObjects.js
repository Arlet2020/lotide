// TEST / ASSERTION FUNCTION

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed ❤ : ${actual} === ${expected}`)
  } else {
    console.log(`Assertion Failed ⛔: ${actual} !== ${expected}`);
  }

};



function eqArrays(array1, array2) {  
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) { 
    if (array1[i] !== array2[i]) {  
      return false;
    }
  }
  return true; 
};


// FUNCTION eqObjects:
// Returns True if both objects have identical keys with identical values
// Returns False, otherwise 
const eqObjects = function (object1, object2) {
    let obj1Keys = Object.keys(object1);
    let obj2Keys = Object.keys(object2);
    if (obj1Keys.length === obj2Keys.length) { 
      for (const key1 of obj1Keys) {
        for (const key2 of obj2Keys) {
          if (key1 === key2) { 
            if (Array.isArray(object1[key1])) {
              if (!eqArrays(object1[key1], object2[key2])) {  
                return false;
              }
            } else if (object1[key1] !== object2[key2]) {
              return false;
            }
          }
        }
      }
    } else {
      return false;
    }
    return true; 
};


module.exports = eqObjects;


//TESTING CODE 
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false
// Tests: Objects have Array Values 
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
const Arlet = { a: [1, 2, 3], b: [3, 3, 4] };
const Linda = { a: [1, 2, 3], b: [3, 2, 4] }
assertEqual(eqObjects(Arlet, Linda), false); // => false