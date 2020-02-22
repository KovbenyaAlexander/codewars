function twoOldestAges(ages){
    let max1 = ages.reduce((max,item) => item > max ? item : max);
    let max1Id = ages.findIndex(item => item === max1);
    ages.splice(max1Id,1);
    let max2 = ages.reduce((max,item) => item > max ? item : max);
    return [max2, max1]
}

twoOldestAges([3,4,6,7,4,64,64,45,])

/*
    https://www.codewars.com/kata/511f11d355fe575d2c000001/javascript
*/
