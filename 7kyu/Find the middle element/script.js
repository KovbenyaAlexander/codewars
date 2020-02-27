var gimme = function (inputArray) {
    let middleElement;
    let sourceArray = inputArray.slice(0, inputArray.length);

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] > inputArray[i + 1]) {
            let z = inputArray[i];
            inputArray[i] = inputArray[i + 1];
            inputArray[i + 1] = z;
            i = -1;
        }
    }
    middleElement = inputArray[1];
    return sourceArray.findIndex(item => item === middleElement);
};


console.log(gimme([2, 3, 1]));