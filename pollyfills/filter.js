function filterFunction(arr, callback){
  var newArr = [];
  arr.forEach(function(elem){
    if(callback(elem))
      newArr.push(elem);
  });
  return newArr;
}
