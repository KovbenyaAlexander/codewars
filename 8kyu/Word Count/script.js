function countWords(str) {
    let count = 0;
    let arr = str.toLowerCase().split(``);
    arr.push(` `);
    for (let i = 0; i < arr.length - 1; i++) {
        if ((arr[i].charCodeAt() > 96 && arr[i].charCodeAt() < 123) || (arr[i].charCodeAt() > 47 && arr[i].charCodeAt() < 58) || (arr[i].charCodeAt() === 39) || arr[i].charCodeAt() === 45) {
            while ((arr[i].charCodeAt() > 96 && arr[i].charCodeAt() < 123) || (arr[i].charCodeAt() > 47 && arr[i].charCodeAt() < 58) || (arr[i].charCodeAt() === 39) || arr[i].charCodeAt() === 45) {
                i++;
            }
            count++;
        }
    }
    return count;
}


countWords(`Can you verify my comma-separated tagline?`)









/*

function countWords(str) {
    let count = 0;
    console.log(str);
    console.log(`'`.charCodeAt());
    str = str.toLowerCase().split(``);
    str.push(` `);
    for (let i = 0; i < str.length - 1; i++) {
        if ((str[i].charCodeAt() > 96 && str[i].charCodeAt() < 123) || (str[i].charCodeAt() > 47 && str[i].charCodeAt() < 58) || (str[i].charCodeAt() === 39)) {
            while ((str[i].charCodeAt() > 96 && str[i].charCodeAt() < 123) || (str[i].charCodeAt() > 47 && str[i].charCodeAt() < 58) || (str[i].charCodeAt() === 39)) {
                i++;
            }
            count++;
        }
    }

    return count;
}

*/