

//const assertEqual = function (actual, expected) {
//  if (actual === expected) {
//    console.log(`Assertion Passed ❤ : ${actual} === ${expected}`)
//  } else {
//    console.log(`Assertion Failed ⛔ : ${actual} !== ${expected}`)
//  }
  

//};

//TEST CODE

//assertEqual("Bootcampp", "Bootcamp");
//assertEqual(6, 6);

const countLetters = (string) => {
  const results = {}
  for (const letter of string) { // quieror hacer algo con eseto......
    if ( letter === ' ') {
      //console.log(`This is a ${letter}`);
      continue;
    }
    //console.log(letter); print my key
    if (results[letter]) { // checar si mi letter existe
      results[letter] += 1;
    } else { // if not, crear nueva key
      results[letter] = 1;
    }
  } console.log(results);
  return results;
}

countLetters("lighthouse in the house")
 

/**
 * Expected Results
 * {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}
 */