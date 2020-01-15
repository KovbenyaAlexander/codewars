function squaresNeeded(grains) {
    let i;
    let sum = 0;

    if (!grains) {
        return 0;
    }

    for (i = 0; i < 65; i++) {
        sum += Math.pow(2, i);
        if (sum >= grains) {
            break;
        }

    }

    return ++i;
}

squaresNeeded(0);

/*
    https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7/javascript
*/

