function absentVowel(x) {
    if (x.split(``).reduce((num, item) => item === `a` ? ++num : num, 0) === 0)
        return 0;

    if (x.split(``).reduce((num, item) => item === `e` ? ++num : num, 0) === 0)
        return 1;

    if (x.split(``).reduce((num, item) => item === `i` ? ++num : num, 0) === 0)
        return 2;

    if (x.split(``).reduce((num, item) => item === `o` ? ++num : num, 0) === 0)
        return 3;

    return 4;
}


console.log(absentVowel(`aaaooaaaeeu`));