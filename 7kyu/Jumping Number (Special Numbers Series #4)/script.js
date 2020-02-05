function jumpingNumber(n) {
    n = String(n).split(``);
    for (let i = 0; i < n.length; i++) {
        if (n[i] - n[i + 1] > 1 || n[i] - n[i + 1] < -1) {
            return `Not!!`;
        }
    }
    return `Jumping!!`;
}

console.log(jumpingNumber(`98789876`));