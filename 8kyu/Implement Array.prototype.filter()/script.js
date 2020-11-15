Array.prototype.filter = function (func) {
    const res = [];
    this.forEach(item => {
        if (func(item)) {
            res.push(item);
        }
    })
    return res;
}