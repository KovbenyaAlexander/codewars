function strongestEven(n, m) {
    if (n % 2 === 1) {
        n++;
    }

    for (let i = n; i <= m; i += 2) {
        if (Math.log2(i) % 1 === 0 && i * 2 > m) {
            return i;
        }
    }








    let arr = [];
    if (n % 2 === 1) {
        n++;
    }
    for (let i = n; i <= m; i += 2) {
        if (Math.log2(i) % 1 === 0 && i * 2 > m) {
            return i;
        }
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

    let ind = arrStrg.findIndex(item => item === max);
    console.log(ind);
    return arr[ind];








}






console.log(strongestEven(1, 15));



















/*

//for little numbers


function strongestEven(n, m) {
    let arr = [];
    if (n % 2 === 1) {
        n++;
    }
    for (let i = n; i <= m; i += 2) {
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

    let ind = arrStrg.findIndex(item => item === max);
    console.log(ind);
    return arr[ind];
}

*/