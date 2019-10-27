var moveZeros = function (arr) {
    let arrZeros = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            arr.splice(i, 1);
            i--;
            arrZeros.push(0);
        }
    }
    return arr.concat(arrZeros);
  }

  moveZeros([1,2,0,0,1,0,1,0,3,0,1]);

  /*
  https://www.codewars.com/kata/52597aa56021e91c93000cb0
  */