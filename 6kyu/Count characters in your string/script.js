function count(string) {
    let res = {};
    string.split(``).forEach(letter => {
        if (res.hasOwnProperty(letter)) {
            res[letter]++;
        } else {
            res[letter] = 1;
        }
    });
    return res;
}