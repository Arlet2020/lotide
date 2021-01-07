// MY EQU ARRAYS 

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

// EQ OBJECTS

const eqObjects = function (object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (let key of keys1) {
      if (
        Array.isArray(object1[key]) &&
        Array.isArray(object2[key])
      ) {
        if (eqArrays(object1[key], object2[[key]]) === false) {
          return false;
        }
      } else if (typeof (object1[key]) === 'object' && typeof (object1[key]) === 'object') {
        if (eqObjects(object1[key], object2[key]) === false) {
          return false;
        }
      } else if (object1[key] !== object2[[key]]) {
        return false;
      }
    }
    return true;
  }
};


// STEP 2.  Primitives As Values (Tests)

//const ab = { a: "1", b: "2" };
//const ba = { b: "2", a: "1" };
//eqObjects(ab, ba); // => true

//const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false




// MY ASSER FUNCTION PARA VERIFICAR AFIRMACIONES

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed ❤ : ${actual} === ${expected}`)
  } else {
    console.log(`Assertion Failed ⛔: ${actual} !== ${expected}`);
  }

};




//TEST CODE

console.log(assertEqual(eqObjects(cd, dc)));
console.log(assertEqual(eqObjects(cd, cd2)));


assertEqual(eqObjects(cd, dc));
assertEqual(eqObjects(cd, cd2));