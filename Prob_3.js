function giveArr(arr, checkNewArr){
  for(let i = 0; i<arr.length;){
    if(checkNewArr(arr[i])){
      return arr;
    }else{
      arr.shift();
    }
  }
};

function newArr1(n){
  if(n >= 3){
    return true;
  }else{
    return false;
  }
}

function newArr2(n){
  if(n > 3){
    return true;
  }else{
    return false;
  }
}

function newArr3(n){
  if(n === 1){
    return true;
  }else{
    return false;
  }
}

console.log(giveArr([1,2,3,4], newArr1));
console.log(giveArr([1,2,3,7,4] , newArr2));
console.log(giveArr([0,1,0,1]  , newArr3));