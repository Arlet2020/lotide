// My head function which returns the first item in the array.

function head(array) {
  const number = array[0];
  return number;
}


// PREVIOUS FUNCTION IMPLEMENTATION

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`"Assertion Passed ❤: [actual] === [expected]"`)
    //console.log("Assertion Passed ❤: [actual] === [expected]");
  } else {
    //console.log(`"Assertion Passed ❤: [actual] === [expected]"`)
    console.log("Assertion Failed ⛔: [actual] !== [expected]");
  }

};

//TEST CODE
console.log(head([5,3,5]));
console.log(head(["Hello", "Lighthouse", "Labs"]));
assertEqual(head([2, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual("Bootcampp", "Bootcamp");
assertEqual(6, 6);
