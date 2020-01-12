var number = function (array) {
    let res = [];
    for (i = 0; i < array.length; i++) {
        let item = [];
        item.push(`${i + 1}: `, array[i]);
        res.push(item.join(``));
    }
    return res;
}

number([`a`, `b`, `c`]);


/*
    https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/javascript
*/