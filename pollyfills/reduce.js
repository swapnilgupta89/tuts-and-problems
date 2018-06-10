function reduceFunction(arr, callback, initialValue){
  var total, start;
  if(typeof initialValue !== "undefined"){
    if(arr.length){
      total = initialValue;
      start = 0;
    }
    else return initialValue;
  }
  else if (arr.length){
    total = arr[0];
    start = 1;
  }
  else{
    throw Error("Reduce of empty array with no initial value");
  }

  if(arr.length){
    for(var i = start; i<arr.length; i++){
      total = callback(total, arr[i], i, arr);
    }
  }
  return total;
}
