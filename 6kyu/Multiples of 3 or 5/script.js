function solution(number){
  let result = 0;
  for (i=0; i<number; i++) {
    if (i % 3 == 0 || i % 5 == 0){
      result += i;
    }
  }
  return result;
}



console.log(solution(10));


/*
  https://www.codewars.com/kata/514b92a657cdc65150000006
*/