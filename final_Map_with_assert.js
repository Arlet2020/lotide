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

// My list of words to test.


const words = ["ground", "control", "to", "major", "tom"];

// My higher Function

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

//console.log(map);

const results1 = map(words, word => word[0]);
console.log(results1);
//const map = function() {
//}


assertArraysEqual(['g', 'c', 't', 'm', 't'] , ['g', 'c', 't', 'm', 't']);
assertArraysEqual(['g', 'm', 't', 'm', 't'], ['g', 'c', 't', 'm', 't']);
assertArraysEqual(['g', 'c', 'o', 'm', 't'], ['g', 'c', 't', 'm', 't']);