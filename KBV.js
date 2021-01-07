// MY FUNCION QUE IMPRIME AFIRMACIONES O NEGACIONES

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed ❤ : ${actual} === ${expected}`)
  } else {
    console.log(`Assertion Failed ⛔: ${actual} !== ${expected}`);
  }

};



const bestTVShowsByGenre = { // MY OBJETO
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};


function findKeyByValue() {


};

console.log(Object.keys(bestTVShowsByGenre));


// ASSERTION EQUAL ORIGINAL CODE TEST 
//assertEqual("Bootcampp", "Bootcamp");
//assertEqual(6, 6);

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);







