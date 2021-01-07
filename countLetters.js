

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

const countLetters = (string) => { //mi funcion toma un string para retornar un conteo de cada una de las letras en ese enunciado

  const results = {} //mi objeto vacio

//FOR TO ITERATE EN MI STRING

  for (const letter of string) { // quieror hacer algo con eseto...... POR CADA LETRA DE MI ENUNCIADO....
    if ( letter === ' ') {
      //console.log(`This is a ${letter}`);
      continue;
    }
    //console.log(letter); print my key
    if (results[letter]) { // checar si mis letters adentro de CONST LETTER existen
      results[letter] += 1;
    } else { // if not, crear nueva key
      results[letter] = 1;

    }
  } console.log(results);
  return results;
}

countLetters("lighthouse in the house")
 
// ESTO SE REGRESA 
// { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }
//UN OBJETO CON EL CONTEO DE CADA UNA DE MIS LETRAS.
// LAS QUE SE IMPRIMIERON EN LA CONSOLA SON LAS QUE SE REPITEN:
/**
 * L   1  VEZ
 * I : 2 VECES
 * G : 1 VEZ
 * H: 4 VECES Y SO ON....
 */


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