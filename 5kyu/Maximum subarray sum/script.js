var maxSequence = function(arr){
    let arrSum = [];
    let sum;
    let max;
    if(arr[0] === undefined){
        return 0;
    }
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            sum = 0;
            if(i < j){
                for(let k = i; k <= j; k++){
                    sum += arr[k];
                }
            }
            else{
                for(let k = j; k <= i; k++){
                    sum += arr[k];
                }
            }
            arrSum.push(sum);
        }
    }
    max = arrSum.reduce((max, current) => max > current ? max : current);
    if(max < 0){
        return 0;
    }
    return max;
}


maxSequence([1,2,3,4,5,6,7,8]);

/*
    https://www.codewars.com/kata/maximum-subarray-sum/javascript
*/