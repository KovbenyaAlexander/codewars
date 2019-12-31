function drawStairs(n) {
    let res = [];
    for (let i = 0; i < n; i++) {
        let = itemOfArray = [];
        for (let j = 0; j < i; j++) {
            itemOfArray.push(` `);
        }
        itemOfArray.push(`I`);
        res.push(itemOfArray.join(``));
    }
    return (res.join(`\n`));
}

/*
    https://www.codewars.com/kata/draw-stairs/javascript
*/