function crossProduct(vector1, vector2) {

    if (!Array.isArray(vector1) || !Array.isArray(vector2) ||
        vector1.length < 3 || vector2.length < 3
    ) {
        throw (`Arguments are not 3D vectors!`);
    }

    let res = [];
    res.push(vector1[1] * vector2[2] - vector1[2] * vector2[1]);
    res.push(vector1[0] * vector2[2] - vector1[2] * vector2[0]);
    res.push(vector1[0] * vector2[1] - vector1[1] * vector2[0]);

    if (res[1] != 0) {
        res[1] = res[1] * (-1);
    }

    return res;
}

console.log(crossProduct([1], [0, 1, 0]));


/*
Arguments are not 3D vectors!
Arguments are not 3D vectors!
*/