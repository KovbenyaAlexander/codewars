function SeriesSum(n) {
    let denominator = 1;
    let res = 0;
    for (let i = 1; i <= n; i++) {
        res += 1 / denominator;
        denominator += 3;
    }
    return res.toFixed(2);
}

/*
    https://www.codewars.com/kata/sum-of-the-first-nth-term-of-series/javascript
*/