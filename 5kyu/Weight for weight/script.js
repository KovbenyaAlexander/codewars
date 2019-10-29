function orderWeight(strng) {
    let sums = [];
    let sum;
    let min;
    let indexMin;
    let result =[];
    strng = strng.split(` `);
    strng.forEach(item => {
        sum = (String(item).split(``));
        sum = sum.reduce((sum, current) => sum + +current, 0);
        sums.push(sum);
    });
    console.log(sums);
    for(let i = 0; i < sums.length; i++){
        min = sums.reduce((item, current) => item < current ? item : current);
        indexMin = sums.findIndex(item => item === min);
        sums[indexMin] = Infinity;
        result.push(strng[indexMin]);
    }
    console.log(result.join(` `));
    return result;
}

orderWeight(`2000 10003 1234000 44444444 9999 11 11 22 123`);