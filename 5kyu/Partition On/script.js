function partitionOn(pred, items) {
    const falseArray = items.filter(item => pred(item) === false);
    const trueArray = items.filter(item => pred(item) === true);

    items.length = 0;
    items.push(...falseArray);
    items.push(...trueArray);

    return falseArray.length;
}