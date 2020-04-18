Array.prototype.filter = function (num) {
    let res = [];
    this.forEach(item => {
        if (item < num) {
            res.push(item);
        }
    });
    return res;
}




let sort = [1, 2, 3, 4, 5, 6, 7, 87, 8, 9, 5, 4, 3, 2, 12, 4, 6, 8, 9, 09].filter(5);
console.log(sort);

//[1,2,3,4].filter((num)=>{ return num > 3}


[1, 2, 3, 4].filter(
    function (num) {
        return num > 3;
    })