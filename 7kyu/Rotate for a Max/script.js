function maxRot(n) {
    let max;
    let arrayOfNumbers = [n];
    n = String(n).split(``);

    for(let i = 0; i < n.length; i++){
        n.push(n[i]);
        n.splice(i, 1);
        arrayOfNumbers.push(n.join(``));
    }

    max = arrayOfNumbers.reduce((max, item) => max > item ? max : item);
    return Number(max);
}

maxRot(56789);

/*
    https://www.codewars.com/kata/56a4872cbb65f3a610000026/javascript
*/