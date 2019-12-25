function lottery(str) {
    res = [];
    str.split(``).forEach(item => {
        if (+item || item === `0`) {
            if (!res.find(item1 => item1 == item)) {
                res.push(item);
            }
        }
    });
    if (res[0] == undefined)
        return `One more run!`;
    return res.join(``);
}

console.log(lottery(`4RlgLMj0NHpBqw4s5m5H`));

/*
    https://www.codewars.com/kata/lottery-machine/javascript
*/