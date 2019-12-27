var removeVowels = function (str) {
    let result = [];
    str.split(``).forEach(letter => {
        if (letter != `a` && letter != `e` && letter != `i` && letter != `o` && letter != `u`) {
            result.push(letter);
        }
    });
    return result.join(``);
}

removeVowels(`aa`);