function isPangram(string) {
    let alphabet = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];
    let indexOfletter;
    string.split(``).forEach(letter => {
        indexOfletter = alphabet.findIndex(letterOfAlphabet => letterOfAlphabet === letter.toLocaleLowerCase());
        if (indexOfletter != -1) {
            alphabet.splice(indexOfletter, 1);
        }
    })
    if (alphabet[0] === undefined)
        return true
    return false
}


isPangram(`a`)


/*
    https://www.codewars.com/kata/545cedaa9943f7fe7b000048/solutions/javascript/me/best_practice
*/