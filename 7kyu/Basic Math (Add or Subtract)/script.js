function calculate(str) {
    let arr = [];

    if (parseInt(str)) {
        arr.push(parseInt(str));
        str = str.split(``);
        str.splice(0, String(arr[0]).length);
        str = str.join(``);


    }

    //console.log(`arr--->${arr}`);
    //console.log(`str--->${str}`);



    for (let i = 0; i < str.length; i++) {
        if (str[0] === `p`) {
            str = str.split(``);
            str.splice(0, 4);
            str = str.join(``);
            arr.push(parseInt(str));
            str = str.split(``);
            str.splice(0, String(arr[arr.length - 1]).length);
            str = str.join(``);
        }

        if (str[0] === `m`) {
            str = str.split(``);
            str.splice(0, 5);
            str = str.join(``);
            arr.push(parseInt(str) * (-1));
            str = str.split(``);
            str.splice(0, String(arr[arr.length - 1]).length - 1);
            str = str.join(``);
        }

        if (parseInt(str)) {

        }

        console.log(arr);
        e2df
        return arr.reduce((sum, item) => sum + item, 0)

    }


}

console.log(calculate(`3plus7plus7`));