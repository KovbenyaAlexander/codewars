function mxdiflg(a1, a2) {
    let arrOfLength1 = [];
    let arrOfLength2 = [];
    let res1;
    let res2;

    a1.forEach(item => {
        arrOfLength1.push(item.length);
    });
    a2.forEach(item => {
        arrOfLength2.push(item.length);
    });

    if (arrOfLength1[0] === undefined || arrOfLength2[0] === undefined)
        return -1;

    let max1 = arrOfLength1.reduce((max, item) => max < item ? item : max);
    let max2 = arrOfLength2.reduce((max, item) => max < item ? item : max);
    let min1 = arrOfLength1.reduce((min, item) => min > item ? item : min);
    let min2 = arrOfLength2.reduce((min, item) => min > item ? item : min);

    res1 = max1 - min2;
    res2 = max2 - min1;

    if (res1 > res2)
        return res1;
    return res2;
}


mxdiflg([`asd`, `sdfsdfsdfsd`, `s2`],
    [`s`, `sdfsdfsfdsfsdfsfsf`, `sdsssssssssssssssssssssssssssssf`]);

/*
https://www.codewars.com/kata/maximum-length-difference/javascript
*/