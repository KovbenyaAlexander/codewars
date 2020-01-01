function solve(arr) {
    let res = 0;
    let minOfArray;
    let indexOfMin;

    while ((arr[0] > 0 && arr[1] > 0) || (arr[0] > 0 && arr[2] > 0) || (arr[1] > 0 && arr[2] > 0)) {
        minOfArray = arr[0];
        indexOfMin = 0;
        for (let i = 0; i < arr.length; i++) {
            if (minOfArray > arr[i]) {
                minOfArray = arr[i];
                indexOfMin = i;
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (i != indexOfMin) {
                --arr[i];
            }
        }
        res++
    }

    return res;
}


console.log(solve([1, 2, 3]))


/*
    https://www.codewars.com/kata/casino-chips/javascript
*/