function getDivisorsCnt(n) {
    let res = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            res++;
        }
    }
    return res;
}

/*
    https://www.codewars.com/kata/542c0f198e077084c0000c2e/javascript
*/