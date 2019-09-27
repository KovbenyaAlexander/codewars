var uniqueInOrder=function(iterable){
  typeof(iterable) == 'object' ? array = iterable : array = iterable.split('');
  for(let i = 0; i < array.length; i++){
    if(array[i] === array[i + 1]){
      array.splice(i + 1, 1);
      i--;
    }
  }
  return array;
}


console.log(uniqueInOrder([1,2,3,5]));


/*
  https://www.codewars.com/kata/unique-in-order/javascript
*/