// 2 vallues obj y cal 2 inputs
// use direct verbal names no generic use camel or snake
// loop through every single boject


const findKey = function (object_to_be_evaluated, callback ) {
  //loop
  const keys = Object.keys(object_to_be_evaluated)
  // cuales son mis llaves. get the keys part obj
  for (const key of keys) {
    // for each key evalue same as I m looking for

    // llamar el call back funcilon con su valor a evaluar
    // callback es el argument oque representa la funcion y su ejecucion
    //
    if (callback(object_to_be_evaluated[key])) {
      return key
    }// compare 
  } // arrays with for of.... first choice/sometimes/ or i++
};




// objeto abajo
 
let results = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2) // => "noma" // call back function 

// x es el VALOR DEL CALL BACK check 
// pass any function.... i want to be able to
// similar line 31 and line 12

console.log(results);





const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed ❤ : ${actual} === ${expected}`)
  } else {
    console.log(`Assertion Failed ⛔: ${actual} !== ${expected}`);
  }

};

//TEST CODE

assertEqual("Bo, "Bootcamp");
assertEqual(6, 6);
