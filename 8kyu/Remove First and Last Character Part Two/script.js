function array(arr){
    arr = arr.split(`,`);
    if(arr.length < 3)
        return null;
    arr.shift();
    arr.pop();
    
    return arr.join(` `);
}

console.log(array(`abc   def`));


/*
    https://www.codewars.com/kata/remove-first-and-last-character-part-two/javascript
*/