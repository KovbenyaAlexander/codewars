function validBraces(braces) {
    let brackets1 = 0;
    let brackets2 = 0;
    let brackets3 = 0;
    let res = true;
    let arr = braces.split(``);
    console.log(arr);
    arr.forEach((item, i) => {
        console.log(i);
        item === `(` ? brackets1++ : true;
        item === `)` ? brackets1-- : true;
        item === `[` ? brackets2++ : true;
        item === `]` ? brackets2-- : true;
        item === `{` ? brackets3++ : true;
        item === `}` ? brackets3-- : true;

        if (brackets1 < 0 || brackets2 < 0 || brackets3 < 0) {
            res = false;
        }

    });

    if (brackets1 != 0 || brackets2 != 0 || brackets3 != 0) {
        res = false;
    }
    return res;
}


console.log(validBraces(`((())))`));


/*
    --
    https://www.codewars.com/kata/valid-braces/train/javascript

*/