//_.head([1,2,3]);
// 
//_.head([]);


//var hola = require('underscore');


var arr = [1, 2, 3, 4, 5];

const [first] = arr;
console.log(first);


const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`"Assertion Passed ❤: [actual] === [expected]"`)
    //console.log("Assertion Passed ❤: [actual] === [expected]");
  } else {
    console.log(`"Assertion Passed ❤: [actual] === [expected]"`)
    //console.log("Assertion Failed ⛔: [actual] === [expected]");
  }

};

//TEST CODE

//assertEqual("Bootcampp", "Bootcamp");
assertEqual(6, 6);
