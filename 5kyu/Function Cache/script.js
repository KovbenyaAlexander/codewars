function cache(func) {
    const map = new Map;
    return function (...args) {
        if (map.has(JSON.stringify(args))) {
            return map.get(JSON.stringify(args))
        } else {
            map.set(JSON.stringify(args), func(...args));
            return map.get(JSON.stringify(args))
        }
    }
}


//----------------

const f = cache(
    function (a, b) {
        return a + b;
    }
);


f(`x`, `y`);
f(`x`, `y`);
f(`x`, `y`);
f(`Q`, `W`);
f(`U`, `Z`);
f(`U`, `Z`)



