function reverseWords(str) {
    return (str.split(` `).map(item => item.split(``).reverse().join(``))).join(` `);
}

console.log(reverseWords(`The quick brown fox jumps over the lazy dog.`));

/*
    https://www.codewars.com/kata/reverse-words/javascript
*/