function multiplyAll(arr) {
    return function (n) {
        return arr.map(item => item * n)
    }
}