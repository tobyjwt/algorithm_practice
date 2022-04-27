function compose(...fns) {
    const n = fns.length;
    if (!n) {
        return arg => arg;
    }
    if (n === 1) {
        return fns[0];
    }
    return fns.reduce((pre, cur, i) => {
        console.log(pre, i);
        return (arg) => pre(cur(arg))
    });
}

function f1(arg) {
    return arg + 'componse1';
}

function f2(arg) {
    return arg + 'compose2';
}

console.log(compose(f1, f2, f1, f2)(''));

[1,2,3,4,5].reduce((pre, cur, i) => {
    return pre + cur;
}, 0)
