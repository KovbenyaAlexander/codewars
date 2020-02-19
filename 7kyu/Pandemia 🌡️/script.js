function infected(s) { //-----Не решена проблема с округлением!
    let total = s.split(``).filter(item => item != `X`).length
    let infected = [];
    s.split(`X`).forEach(item => {
        if (item.split(``).findIndex(person => person == 1) != -1) {
            infected.push(item);
        }
    });

    /*
        console.log(s);
        console.log(`total--->${total}`); //+
        console.log(`infected--->${infected.join(``).length}`); //+
        console.log(infected);*/

    return 100 * infected.join(``).length / total
}

console.log(infected(`X00X000000X10X0100`));

