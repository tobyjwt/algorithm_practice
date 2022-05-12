function createCurry(fn, ...args) {
    const length = fn.length;
    if (!args) {
        args = [];
    }

    return function () {
        const allArgs = args.concat(Array.prototype.slice.call(arguments));
        if (allArgs.length === length) {
            return fn(...allArgs);
        } else {
            return createCurry(fn, ...allArgs);
        }
    }
}

function curry(fn) {
    // curriedFn 为柯里化生产的新函数
    // 为什么不使用匿名函数？因为如果传入参数 args.length 小于 fn 函数的形参个数 fn.length，需要重新递归
    return function curriedFn(...args) {
        if (args.length < fn.length){
            return function() {
                // 之前传入的参数都储存在 args 中
                // 新函数参入参数在 arguments，因为 arguments 并非真正的数组需要 Array.from() 转换成数组
                // 递归执行，重复之前的过程
                return curriedFn(...args.concat(Array.from(arguments)))
            }
        }
        return fn(...args)
    }
}

const test = function (a, b, c, d, e, f, g) {
    return `${a}${b}${c}${d}${e}${f}${g}`;
}

// console.log(createCurry(test, 1));
// console.log(createCurry(createCurry(test, 1, 2), 4, 5, 6, 7, 8)());

const sum = function (a, b, c, d) {
    return a + b + c;
}


const sumCurry = createCurry(sum, 2);
console.log(sumCurry(1)(2)(3));
