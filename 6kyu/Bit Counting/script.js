var countBits = function(n) {
    let arrBin = [];
    let res = 0;
    if(n == 0) return 0;
    while(n != 1 && n != 0){
        arrBin.push(n % 2);
        n = Math.floor(n / 2);
    }
    arrBin.forEach(item => {
        item == 1 ? res++ : true;
    });
    return res + 1;
};



console.log(countBits(1234));

/*
https://www.codewars.com/kata/bit-counting/javascript
*/