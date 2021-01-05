

// Original array  
var users = [
  { 'user': 'jupiter', 'active': false },
  { 'user': 'mercury', 'active': false },
  { 'user': 'saturn', 'active': true }
];


// Use of _.takeWhile()  
// method 
let gfg = _.takeWhile(users, function (o) { return !o.active; });

// Printing the output  
console.log(gfg); 