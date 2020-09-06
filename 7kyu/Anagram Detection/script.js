var isAnagram = function (str1, str2) {
    let res = true;
    str1 = str1.toLowerCase().split(``);
    str2 = str2.toLowerCase().split(``);

    if (str1.length !== str2.length) {
        res = false;
    }

    str1.forEach(letter => {
        let index = str2.findIndex(item => {
            return item === letter;
        });

        index !== -1 ? str2.splice(index, 1) : res = false
    });

    return res;
};
