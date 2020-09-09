function createMessage(a) {
    let sum = `${a} `;
    return function count(b) {
        if (b) {
            sum += `${b} `;
            return count;
        } else {
            return sum.trim();
        }

    };
}

console.log(
    createMessage("Hello")("World!")("how")("are")("you?")()
)