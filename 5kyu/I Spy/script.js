function spyOn(func) {
    const args = [];
    let callsCounter = 0;
    let res;

    const cb = function (...arg) {
        callsCounter++;
        args.push(...arg);
        res = func.call(this, ...args);
        return res;
    }

    cb.callCount = function () {
        return callsCounter;
    }

    cb.wasCalledWith = function (value) {
        return args.includes(value);
    }

    cb.returned = function (res1) {
        return res === res1;
    }

    return cb;
}