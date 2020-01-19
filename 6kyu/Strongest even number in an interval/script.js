function strongestEven(n, m) {
    let arr = [];
    for (let i = n; i <= m; i++) {
        arr.push(i);
    }

    console.log(arr);
    let arrStrg = [];


    arr.forEach(item => {
        let strong = 0;
        while (item % 2 == 0) {
            item = item / 2;
            strong++;
        }
        arrStrg.push(strong);
    });
    console.log(arrStrg);

    let max;

    max = Math.max(...arrStrg);
    console.log(max);

    return max;
    let arrMax = [];
    for (let i = 0; i < arrStrg.length; i++) {
        if (arrStrg[i] === max) {
            arrMax.push(i);
        }
    }
    console.log(arrMax);
}

strongestEven(1, 15);