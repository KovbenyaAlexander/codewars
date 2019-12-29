function isValidWalk(walk) {
    let n = walk.reduce((sum, item) => item === `n` ? ++sum : sum, 0);
    let s = walk.reduce((sum, item) => item === `s` ? ++sum : sum, 0);
    let w = walk.reduce((sum, item) => item === `w` ? ++sum : sum, 0);
    let e = walk.reduce((sum, item) => item === `e` ? ++sum : sum, 0);

    if (n === s && w === e && walk.length === 10)
        return true;
    return false;
}

isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])

/*
    https://www.codewars.com/kata/take-a-ten-minute-walk/javascript
*/