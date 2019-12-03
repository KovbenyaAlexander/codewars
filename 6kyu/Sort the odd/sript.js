function sortArray(array) {
    let oddArr = [];

    array.forEach(item => {
        item % 2 != 0 ? oddArr.push(item) : true;
    });

    for (let i = 0; i < oddArr.length - 1; i++) {
        let k;
        if (oddArr[i] > oddArr[i + 1]) {
            k = oddArr[i];
            oddArr[i] = oddArr[i + 1];
            oddArr[i + 1] = k;
            i = -1;
        }
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            array[i] = oddArr[0];
            oddArr.shift();
        }
    }

    return array;
}


sortArray([5, 3, 2, 8, 1, 4])


/*
    https://www.codewars.com/kata/sort-the-odd/javascript
*/