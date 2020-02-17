function firstNonConsecutive(arr) {
    let i;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] - arr[i + 1] != -1) {
            break;
        }
    }
    if (i === arr.length - 1)
        return null;
    return arr[i + 1];
}

console.log(firstNonConsecutive([1, 2, 3, 4, 5]));

/*
        https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/javascript
*/