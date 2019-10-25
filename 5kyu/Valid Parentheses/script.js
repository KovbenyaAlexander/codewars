function validParentheses(parens){
    let count = 0;
    let res = true;
    parens.split(``).forEach(item => {
        item === `(` ? count++ : count --;
        if(count < 0){
            res = false;
        }
    });
    count > 0 ? res = false : true;
    return res;
}

console.log(validParentheses(`())`));

/*
    https://www.codewars.com/kata/52774a314c2333f0a7000688
*/