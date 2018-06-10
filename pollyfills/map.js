function filterFunction(arr, callback){
  var newArr = [];
  arr.forEach(function(elem){
      newArr.push(callback(elem));
  });
  return newArr;
}
