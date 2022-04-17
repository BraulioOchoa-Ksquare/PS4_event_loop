function destroyer() {
  let arr = arguments[0];
  let params = [];

  // Create array of all elements to be removed
  for (let i = 1; i < arguments.length; i++)
    params.push(arguments[i]);
  
  // return all not matching values
  return arr.filter(function(item) {
    return params.indexOf(item) < 0;
  });
}

console.log(destroyer([1, 2, 3, 1, 2, 3]  , 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3] , 2, 3));
