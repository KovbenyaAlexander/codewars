function switcher(x) {
    let alphabet = [`z`, `y`, `x`, `w`, `v`, `u`, `t`, `s`, `r`, `q`, `p`, `o`, `n`, `m`, `l`, `k`, `j`, `i`, `h`, `g`, `f`, `e`, `d`, `c`, `b`, `a`, `!`, `?`, ` `];
    let res = [];
    x.forEach(item => {
        res.push(alphabet[item - 1]);
    });
    return res.join(``);
}

switcher([`24`]);


/*
    https://www.codewars.com/kata/numbers-to-letters/javascript
*/

