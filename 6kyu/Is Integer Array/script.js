function isIntArray(arr) {
    if (!arr)
        return false;

    for (let i = 0; i < arr.length; i++) {
        if (!arr[i] || typeof (arr[i]) === `string` || Math.floor(arr[i]) != arr[i])
            return false;
    }

    return true;
}

console.log(isIntArray([1, 2, 3, 4]));

/*
    https://www.codewars.com/kata/is-integer-array/javascript
*/







/*
function isIntArray(arr) {
    let res = true;
    if (!arr)
        return false;
    arr.forEach(item => {
        if (!item || typeof (item) === `string` || Math.floor(item) != item)
            res = false;
    });
    return res;
}
*/
