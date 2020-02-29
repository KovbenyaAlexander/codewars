function findLongest(array) {
    let arrayOfLength = array.map(item => String(item).length);
    let maxLength = arrayOfLength.reduce((max, item) => item > max ? item : max);
    let idMax = arrayOfLength.findIndex(item => item === maxLength);
    return array[idMax];
}


findLongest([12222221, 11111, 111]);