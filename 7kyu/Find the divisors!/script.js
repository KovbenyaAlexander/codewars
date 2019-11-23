function divisors(integer) {
    let res = [];
    for(let i = 2; i < integer; i++){
        if(integer % i === 0)
            res.push(i);
    }
    if(res[0])
        return res;
    return `${integer} is prime`;
}

/*
    https://www.codewars.com/kata/find-the-divisors/javascript
*/