function findDup(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    let res;

    sortedArr.forEach((item, i) => {
        if (item === sortedArr[i + 1])
            res = item;
    });

    return res;
}





findDup([1, 2, 3, 4, 5, 2, 5, 7, 8, 5, 3, 2])