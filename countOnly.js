/**
 * const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`"Assertion Passed ❤: [actual] === [expected]"`)
    //console.log("Assertion Passed ❤: [actual] === [expected]");
  } else {
    //console.log(`"Assertion Passed ❤: [actual] === [expected]"`)
    console.log("Assertion Failed ⛔: [actual] !== [expected]");
  }

};

//TEST CODE ASSERT EQUAL

//assertEqual("Bootcampp", "Bootcamp");
//assertEqual(6, 6);

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

/**
 * const countOnly = function (allItems, itemsToCount) {
  const results = {}
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


assertEqual(result1["Jason"], 1)
assertEqual(result["Karima"], undefined);
assertEqual(result["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
 * 
 */



const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`"Assertion Passed ❤: [actual] === [expected]"`)
    //console.log("Assertion Passed ❤: [actual] === [expected]");
  } else {
    //console.log(`"Assertion Passed ❤: [actual] === [expected]"`)
    console.log("Assertion Failed ⛔: [actual] !== [expected]");
  }

};

// 1. PRIMER STEP. DEFINIR MY FUNCION

// allItems: Es un an ARRAY of strings that we need to look through

// itemsToCount: MY OBJETO specifying what to count

// countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.

const countOnly = function (allItems, itemsToCount) {
  const results = {}; // 2.1 DEFINIR UN NUEVO OBJETO VACIO Y PASO 2.2. RETURN DENTRO DE MI FUNCION.

  for (const item of allItems) { //In order to know how many Jason's are in our list, we need to scan the entire list
    console.log(item); // prints all the items in the array to the console

    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1; // Increment the count of each item into results as we encounter each string item in the array.
      } else {
        results[item]
      }
    }

    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }

  }

  return results;
}


module.exports = countOnly;


// MY ARRAY

const firstNames = [ 
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 3);
assertEqual(result1["Agouhanna"], 1);