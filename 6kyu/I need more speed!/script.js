function reverse(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let k;
        k = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = k;
    }
}



console.log(reverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

