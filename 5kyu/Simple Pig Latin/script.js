function pigIt(str){
    let result = [];
    let array = str.split(` `);
    array.forEach(item => {
        if(item[0] != `!` && item[0] != `?`){
            item = item.split(``);
            let k = item.shift();
            item.push(k,`a`, `y`);
            result.push(item.join(``));
        }
        else
            result.push(item);
    });
    return result.join(` `);
}

pigIt(`abcd ef`);



/*
https://www.codewars.com/kata/520b9d2ad5c005041100000f
*/