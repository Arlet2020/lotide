const takeUntil = function (array, callback) {

  const newArray = []; // 1 // empry array
  for (const x of array) { // looping entre parameters
     //console.log(callback(x), x);
    if (callback(x)) { // mi valor verdadero
      break
      //console.log(x);
    } else {
      newArray.push(x) 
    }
  }
  //console.log(newArray); // each item in my array

////

 //array.forEach((item, index) => { // //posicion de mis elementos en mi array solo EXAMPLE
 //  console.log(index, item);
 // });
  
 return newArray // 2 
};



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5]; // array
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');



const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ','); /// call back desde la x hasta ' '
console.log(results2);


