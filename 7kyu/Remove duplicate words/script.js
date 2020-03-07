function removeDuplicateWords(s) {
    let set = new Set(s.split(` `));
    let result = [];

    for (let word of set) {
        result.push(word);
    }

    return result.join(` `);
}

removeDuplicateWords(`abc def rrr abc`);


//Только что я успешно воспользовался set'ом. Это было впервые в моей жизни. 
//7 марта 2020.