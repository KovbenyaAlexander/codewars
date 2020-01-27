function maxTriSum(numbers) {
    let res = 0;

    findMax(numbers);
    findMax(numbers);
    findMax(numbers);

    function findMax(numbers) {
        let max = numbers.reduce((max, item) => max < item ? item : max);
        res += max;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] === max) {
                numbers.splice(i, 1);
                i--;
            }
        }
    }

    return res;
}

maxTriSum([1, 2, 3, 34, 34, 34, 5]);