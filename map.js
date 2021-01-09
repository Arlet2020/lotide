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
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
}

module.exports = map;

//console.log(map);

const results1 = map(words, word => word[0]);
console.log(results1);



//const map = function() {

//}

