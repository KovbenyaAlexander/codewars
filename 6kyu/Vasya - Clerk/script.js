function tickets(peopleInLine) {
    let count25 = 0;
    let count50 = 0;
    for (let i = 0; i < peopleInLine.length; i++) {

        if (peopleInLine[i] == 25)
            count25++;

        if (peopleInLine[i] == 50) {
            count50++;
            if (count25 == 0)
                return `NO`
            else
                count25--;
        }

        if (peopleInLine[i] == 100) {
            if (count25 > 0 && count50 > 0) {
                count25--;
                count50--;
            }
            else {
                if (count25 > 2)
                    count25 = count25 - 3;
                else
                    return `NO`
            }
        }
    }
    return `YES`;
}



console.log(tickets([25, 25, 25, 25, 25, 100, 100, 100, 100]));
