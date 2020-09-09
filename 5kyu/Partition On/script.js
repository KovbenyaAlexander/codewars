function partitionOn(pred, items) {
    let res = []

    items.forEach(item => {
        res.push(pred(item))
    });

    console.log(res);


}



let items = [1, 2, 3, 4, 5, 6];
function isEven(n) { return n % 2 == 0 }


let i = partitionOn(isEven, items);
console.log(i);
