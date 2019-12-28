function comp(array1, array2) {
    let indexOfElement;
    let res = true;
    if (!array1 || !array2)
        return false;

    array1.forEach(element => {
        indexOfElement = array2.findIndex(item => item === Math.pow(element, 2));
        if (indexOfElement < 0)
            res = false;
        else
            array2.splice(indexOfElement, 1);
    });

    return res;
}


comp([121, 144, 19, 161, 19, 144, 19, 11],
    [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]);
