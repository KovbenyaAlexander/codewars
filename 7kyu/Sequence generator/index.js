function sequence(n, pattern) {
    let res = [];

    if (typeof (pattern) === `function`) {
        for (let i = 0; i < n; i++) {
            res.push(pattern(n, i));
        }
    } else {
        for (let i = 0; i < n; i++) {
            res.push(pattern);
        }
    }

    return res;
}
