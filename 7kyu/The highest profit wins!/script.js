function minMax(arr) {
    let min = arr.reduce((min, item) => min > item ? item : min);
    let max = arr.reduce((max, item) => max < item ? item : max);
    return [min, max];
}

/*
    The highest profit wins!
*/