function findOdd(array) {
  for(let i = 0; i < array.length; i++){
    let count = 0;
    for(let j = 0; j < array.length; j++){
      if(array[i] == array[j])
        count++;
    }
    if(count % 2 == 1){
      return array[i];
    }
  }
}



console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));


/*
  https://www.codewars.com/kata/54da5a58ea159efa38000836
*/