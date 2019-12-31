function well(x) {
    let good = x.reduce((sum, item) => item === `good` ? ++sum : sum, 0);
    if (good > 2)
        return `I smell a series!`;
    if (good > 0)
        return `Publish!`;
    return `Fail!`;
}

/*
    https://www.codewars.com/kata/well-of-ideas-easy-version/javascript
*/