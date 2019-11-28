function solution(digits) {
    let arrOfNumbers = [];
    let max;
    let maxId;
    let result = ``;
    for (let i = 0; i < digits.length - 4; i++) {
        arrOfNumbers.push(digits[i] + digits[i + 1] + digits[i + 2] + digits[i + 3] + digits[i + 4]);
    }
    max = arrOfNumbers.reduce((max, item) => max > item ? max : item);
    maxId = arrOfNumbers.findIndex(item => item === max);
    for (let i = maxId; i < maxId + 5; i++) {
        result += digits[i];
    }
    return +result;
}


solution(`91234567890`);

/*
    https://www.codewars.com/kata/largest-5-digit-number-in-a-series/javascript
*/