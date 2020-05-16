var encryptThis = function (text) {
    let res = [];
    let arrWords = text.split(` `);

    arrWords.forEach(word => {
        let encryptedWord = [];
        encryptedWord.push(word[0].charCodeAt());

        if (word.length == 2) {
            encryptedWord.push(word[1]);
        } else if (word.length > 2) {
            encryptedWord.push(word[word.length - 1]);
            for (let i = 2; i < word.length - 1; i++) {
                encryptedWord.push(word[i]);
            }
            encryptedWord.push(word[1]);
        }

        res.push(encryptedWord.join(``));
    });

    return res.join(` `);
}

encryptThis(`The more he saw the less he spoke`);

/*
https://www.codewars.com/kata/5848565e273af816fb000449/javascript
*/