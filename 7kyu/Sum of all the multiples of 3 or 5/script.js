function findSum(n) {
    let res = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            res += i;
        }
    }
    return res;
}


findSum(8);