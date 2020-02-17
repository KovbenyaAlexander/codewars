function potatoes(p0, w0, p1) {
    let = solidPercentage0 = 100 - p0; // solid percentage before drying
    let weightSolid0 = w0 * (solidPercentage0 / 100); //solid weight
    let = solidPercentage1 = 100 - p1; //solid percentage after drying
    let weight = (100 / solidPercentage1) * weightSolid0; // weight after drying
    return Math.floor(weight);
}

/*
    https://www.codewars.com/kata/58ce8725c835848ad6000007
*/