function makeIterator(array){
  var index = 0;
  return{
    next: function(){
      var flag;
      if(index >= (array.length)){
          return {done: true};
      }

      else{
        return{value:array[index++], done: false};
      }
    }
  }
}
