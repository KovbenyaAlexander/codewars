function factorial(n) {
    if (n > -1 && n < 13) {
        if (n === 0) {
            return 1;
        }
        let res = 1;
        for (let i = 1; i <= n; i++) {
            res = res * i;
        }
        return res;
    } else {
        throw new RangeError(e)
    }
}
console.log(factorial(5));

