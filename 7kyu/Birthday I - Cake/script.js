Birthday I - Cakefunction cake(x, y) {
    let alphabet = [0, `a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];
    let count = 0;

    y.split(``).forEach((letter, i) => {
        if (i % 2 == 0) {
            count += letter.charCodeAt();
        } else {
            count += alphabet.findIndex(item => item === letter)
        }
    });

    if (x * 0.7 < count) {
        return `Fire!`;
    } else {
        return `That was close!`
    }
}