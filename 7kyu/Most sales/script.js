function top3(products, amounts, prices) {
    let arrayOfPrices = [];
    let arrOfMax = [];
    let idMaxs = [];
    let res = [];
    for (let i = 0; i < amounts.length; i++) {
        arrayOfPrices.push(amounts[i] * prices[i])
    }


    console.log(arrayOfPrices);
    findMax(arrayOfPrices);
    findMax(arrayOfPrices);
    findMax(arrayOfPrices);


    function findMax(arrayOfPrices) {
        let max = arrayOfPrices.reduce((max, item) => max < item ? item : max, arrayOfPrices[0]);
        let idMax = arrayOfPrices.findIndex(item => item === max);
        arrayOfPrices[idMax] = undefined;
        idMaxs.push(idMax);
    }

    console.log(`array-->${idMaxs}`);

    idMaxs.forEach(item => {
        res.push(products[item]);
    })
    console.log(res);
    return res;
}

console.log(top3([`A`, `B`, `C`, `D`, `C`], [1, 2, 3, 4, 5], [5, 55, 5, 5, 5]))