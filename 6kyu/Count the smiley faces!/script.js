function countSmileys(arr) {
    let res = 0;
    arr.forEach(item => {
        if (item[item.length - 1] === `)` || item[item.length - 1] === `D`)
            if (item[0] === `:` || item[0] === `;`)
                if ((item.length === 3 && (item[1] === `-` || item[1] === `~`)) || item.length === 2)
                    res++;
    });
    return res;
}

/*
    https://www.codewars.com/kata/583203e6eb35d7980400002a/javascript
*/