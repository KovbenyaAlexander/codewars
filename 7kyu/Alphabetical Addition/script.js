function addLetters(...array) {
    let count = 0;
    array.forEach(item => {
        count += (item.charCodeAt() - 96);
    });
    count = (count % 26) + 96;
    if (count === 96) {
        return `z`;
    }
    return String.fromCharCode(count);
}

addLetters([`y`, `c`, `b`]);

/*
    https://www.codewars.com/kata/5d50e3914861a500121e1958/javascript
*/