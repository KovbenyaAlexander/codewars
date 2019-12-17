function stray(numbers) {
    if (numbers[0] == numbers[1]) {
        numbers.forEach(item => {
            if (item != numbers[0])
                res = item;
        });
    }
    else {
        if (numbers[1] == numbers[2])
            res = numbers[0];
        else
            res = numbers[1];
    }
    return res;
}

/*
    https://www.codewars.com/kata/find-the-stray-number/javascript
*/