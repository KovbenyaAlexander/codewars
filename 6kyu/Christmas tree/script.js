function christmasTree(height) {
    let res = [];

    for (let i = 0; i < height; i++) {
        let elemOfArray = [];
        for (let j = 0; j < (height * 2) - 1; j++) {
            elemOfArray.push(`*`);
        }
        res.push(elemOfArray);
    }

    for (let i = 0; i < height; i++) {
        res[i].splice(0, i * 2);
    }
    res.reverse();

    for (let i = 0; i < height; i++) {
        while (res[i].length != (height * 2) - 1) {
            res[i].push(` `);
            res[i].unshift(` `);
        }
        res[i] = res[i].join(``);
    }

    return res.join(`\n`);
}



christmasTree(4);

/*
    https://www.codewars.com/kata/christmas-tree/javascript
*/
