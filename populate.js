const words = ["ground", "control", "to", "major", "tom"];

//var maPeaBaby = words.map(function (words) {
//  console.log(maPeaBaby)
//  //return lighthouses.length
//})
//console.log(maPeaBaby)


//const map = function () {
//  // empty for now :)
//}

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

