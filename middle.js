// EqArrays

function eqArrays(array1, array2) {  //does work for us, compare equality
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) { //check item at same index if the same; not nested for loop, not need both 1 and 2
    if (array1[i] !== array2[i]) {  //end condition is not equal
      return false;
    }
  }
  return true; //return boolean
}


