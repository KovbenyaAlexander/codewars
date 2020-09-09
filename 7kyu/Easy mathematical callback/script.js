function processArray(arr, callback) {
    return arr.map(item => callback(item))
}