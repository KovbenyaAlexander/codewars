function isPrime(num) {
    let res = true;

    if (num < 2) {
        res = false;
    }

    for (let i = 2; i < Math.ceil(Math.pow(num, 0.55)); i++) {
        if (num % i === 0) {
            res = false;
            break;
        }
    }

    return res;
}

console.log(isPrime(3));

/*
    https://www.codewars.com/kata/is-a-number-prime/javascript
*/



// https://habr.com/ru/post/133037/
// https://scienceland.info/algebra8/prime-numbers-properties

