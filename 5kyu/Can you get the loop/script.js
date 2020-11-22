function loop_size(node) {
    let arr = [];
    let nextNode = node;
    let loopLength;


    while (arr.indexOf(nextNode) < 0) {
        arr.push(nextNode);
        nextNode = nextNode.getNext();
    }

    loopLength = arr.indexOf(nextNode);

    return arr.length - loopLength;
}