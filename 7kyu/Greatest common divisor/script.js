function mygcd(a, b) {

    while (a != 0 && b != 0) {
        if (a > b) {
            a = a % b
        } else {
            b = b % a
        }
    }

    return a + b
}

// https://younglinux.info/algorithm/euclidean