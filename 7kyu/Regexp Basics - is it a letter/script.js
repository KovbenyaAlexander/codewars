String.prototype.isLetter = function () {


    if (!this) {
        return false
    }
    console.log(this.match(/[A-Za-z]{1}$/gm))
    return this.match(/[A-Za-z]{1}$/gm);
}

console.log(`h`.isLetter());