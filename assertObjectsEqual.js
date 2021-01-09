const eqObjects = function (object1, object2) {
    let obj1Keys = Object.keys(object1);
    let obj2Keys = Object.keys(object2);
    if (obj1Keys.length === obj2Keys.length) { //compare lengths, not equal returns false
      for (const key1 of obj1Keys) {
        for (const key2 of obj2Keys) {
          if (key1 === key2) {  ///compare both objects values for that key
            if (Array.isArray(object1[key1])) {
              if (!eqArrays(object1[key1], object2[key2])) {  //no match, return false 
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
    return true;  //only reach true if all keys match
  };



// 

const assertObjectsEqual = function (actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed ❤: ${actual} === ${expected}`)
  } else {
    console.log(`"Assertion Failed ⛔: ${actual} !== ${expected}`);
  }

};

module.exports = assertObjectsEqual;

assertObjectsEqual([1, 2, 3], [1, 2, 3]);
assertObjectsEqual([1, 1, 1], [1, 1, 1]);
