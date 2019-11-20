function toCamelCase(str){
    let result = [];
    let word;
    str = str.split(/-|_/);
    for(let i = 1; i < str.length; i++){
        word = str[i].split(``);
        word[0] = word[0].toUpperCase();
        result.push(word.join(``));
    }
    result.unshift(str[0])
    return result.join(``);
}

toCamelCase("the-stealth-warrior");


/*
https://www.codewars.com/kata/convert-string-to-camel-case/javascript
*/