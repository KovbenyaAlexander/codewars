String.prototype.isLetter = function () {

    if (!this || this.length != 1) {
        return false
    }

    return !!this.match(/[A-Za-z]{1}$/gm);
}




console.log(`h`.isLetter());