function crossProduct(vector1, vector2) {
    let res = [];
    res.push(vector1[1] * vector2[2] - vector1[2] * vector2[1]);
    res.push(vector1[0] * vector2[2] - vector1[2] * vector2[0]);
    res.push(vector1[0] * vector2[1] - vector1[1] * vector2[0]);
    res[1] = res[1] * (-1);
    return res;
}