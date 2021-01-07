const { inspect } = require('util');

const assertObjects = (object1, object2) => {
const inspect = require('util').inspect;
const keyOfObject1 = Object.keys(object1)
const keyOfObject2 = Object.keys(object2)
keyOfObject1.sort();
keyOfObject2.sort();
if (keyOfObject1.length !== keyOfObject2) {
  return console.log(` Assertion Failed : [${keyOfObject1}] !== [${keyOfObject2}]`);
}
  for (let i= 0; i < keyOfObject1.length; i++) {

    if (keyOfObject1[i]) === keyOfObject2[i]) {

      if(!eqArrays(object1[keyOfObject1[i]], object2[keyOfObject2[i]]) {
        return console.log(` Assertion Failed: [${keyOfObject1}] === [${keyOfObject2}]`);
      }
    }
  }
}
return console.log(` Assertion Passed: [${inspect(object1)}] === [${inspect(object2)}]`);
};

const ab = {a: "1", b: "2"};
const ba = {b: '2', a: "1"};
assertObjectsEqual(ab, ba); // true
