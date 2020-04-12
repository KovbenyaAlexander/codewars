function prefill(n, v) {

    if ((!+n && n != 0) ||
        (n == Infinity || n == -Infinity) ||
        n < 0 ||
        typeof (n) == `boolean` ||
        n % 1 != 0
    ) {
        throw new TypeError(`${n} is invalid`);
    }

    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(v);
    }
    return res;

}

console.log(prefill(`15x`, `DD`));
