function findUniq(arr) {
    if(arr[0] === arr[1]){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] != arr[0]){
                return arr[i];
            }
        }
    }

    if(arr[1] == arr[2])
        return arr[0];
    else
        return arr[1];
}
  

/*
    https://www.codewars.com/kata/find-the-unique-number-1/javascript
*/