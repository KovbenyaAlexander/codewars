var min = function (list) {
    return list.reduce((min, item) => min > item ? item : min);
}

var max = function (list) {
    return list.reduce((max, item) => max > item ? max : item);
}