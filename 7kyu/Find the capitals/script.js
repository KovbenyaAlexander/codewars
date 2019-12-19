var capitals = function (word) {
    let res = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i].charCodeAt() > 64 && word[i].charCodeAt() < 91) {
            res.push(i);
        }
    }
    return res;
}

capitals(`AaaabbbAAFFfsdfsA`)

/*
    https://www.codewars.com/kata/find-the-capitals-1/javascript
*/