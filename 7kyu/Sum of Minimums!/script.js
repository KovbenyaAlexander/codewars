function sumOfMinimums(arr) {
    let res = 0;
    arr.forEach(item => {
        res += item.reduce((min, item) => min > item ? item : min);
    });
    return res;
}