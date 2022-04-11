function createCurry(fn, ...args) {
    const length = fn.length;
    if (!args) {
        args = [];
    }

    return function () {
        const allArgs = args.concat(Array.prototype.slice.call(arguments));
        if (allArgs.length === length) {
            return fn.call(this, ...allArgs);
        } else {
            return fn.call(this, ...allArgs);
        }
    }
}

const test = function (a, b, c, d, e, f, g) {
    return `${a}${b}${c}${d}${e}${f}${g}`;
}

console.log(createCurry(test, 1));
console.log(createCurry(createCurry(test, 1, 2), 4, 5, 6, 7, 8)());
