function solution(str, ending) {
    str = str.split(``).reverse();
    ending = ending.split(``).reverse();
    return str.slice(0, ending.length).join(``) === ending.join(``);
}


console.log(solution(`abcd`, `cd`));

/*
    https://www.codewars.com/kata/string-ends-with/javascript
*/