function duplicateEncode(word){
    let result = [];
    let count;
    word.split('').forEach(letter => {
        count = 0;
        word.split('').forEach(letter1 => {
            if(letter.toLowerCase() == letter1.toLowerCase())
                count++;
        });
        count > 1 ? result.push(`)`) : result.push(`(`);
    });
    return result.join('');
}



console.log(duplicateEncode('Success'));


/*
https://www.codewars.com/kata/duplicate-encoder/javascript
*/