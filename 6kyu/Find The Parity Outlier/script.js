function findOutlier(array){
  let typeOfarray = 0;
  array.forEach(element => {
      if(element % 2 == 0){
          typeOfarray++;
      }
  });
  if(typeOfarray > 1){
      return array.find(item => item % 2 != 0);
  }
  else{
      return array.find(item => item % 2 == 0);
  }
}



console.log(findOutlier([1,3,5,2,3,7,5,3,9]));


/*
  https://www.codewars.com/kata/5526fc09a1bbd946250002dc
*/