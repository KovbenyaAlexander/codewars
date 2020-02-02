function oddOneOut(str) {
    str = str.split(``).reverse();
    let res = [];

    str.forEach(item => {

        let count = str.reduce((count, item1) => item === item1 ? ++count : count, 0);
        //console.log(count);
        if (count % 2 === 1) {
            res.push(item);
        }
    });


    return res.reverse();
}


console.log(oddOneOut(`Hello World`));



/*

function oddOneOut(str) {
    str = str.split(``);

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                str.splice(i, 1);
                str.splice(j - 1, 1);
                i = -1;
                break
            }
        }
    }

    return str;
}


console.log(oddOneOut(`racecar`));

*/