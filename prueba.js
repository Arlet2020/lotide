const myFn = function () { // 1esta es una FUNCION asgnada a una variable
  console.log("I am function. Soy una FUNCION"); // ESTOY IMPRIMIENDO LA FUNCION
}

myFn.someAttribute = 42;// 2 An attribute someAttribute is assigned to that function object
console.log(myFn.someAttribute);

function runner(f) { // 3.  A runner function is defined that runs the argument f that we PASS it
  f();
}

runner(myFn); // We PASS a reference to our myFn, which gets invoked by the runner function