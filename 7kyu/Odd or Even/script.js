function oddOrEven(array) {
    if (array[0] === undefined)
        return `even`;
    let sum = array.reduce((sum, item) => sum += item);
    if (sum % 2 === 0)
        return `even`;
    return `odd`;
}

/*
    https://www.codewars.com/kata/odd-or-even/javascript
*/