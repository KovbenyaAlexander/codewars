function consecutiveDucks(num) {

    let arr = [];
    let res = false;

    let f = 0;
    let f1 = 0;

    outer: for (let i = 1; i < num; i++) {
        f++;
        //console.log(`-------${i}`);
        let sum = 0;
        for (let j = 1; j < num; j++) {
            f1++;





            if (i > j) {
                for (let k = j; k <= i; k++) {
                    sum += k;
                }



                //console.log(`j=${j} || i=${i} ||||| sum = ${sum}`)

                if (sum === num) {
                    res = true;
                    break outer;
                }
                sum = 0;
            }

        }


    }

    console.log(`outer=${f} /// inside=${f1}`)
    return res;
}

console.log(consecutiveDucks(2048));