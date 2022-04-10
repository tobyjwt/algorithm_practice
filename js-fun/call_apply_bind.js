Function.prototype.myCall = function (thisArg, ...args) {
    const fn = Symbol('fn');
    const context = thisArg || window || global;
    context[fn] = this;
    const result = context[fn](...args);
    delete context[fn];
    return result;
}

Function.prototype.myApply = function (thisArg, args) {
    const fn = Symbol('fn');
    const context = thisArg || window || global;
    context[fn] = this;
    const result = context[fn](...args);
    delete context[fn];
    return result;
}

Function.prototype.myBind = function (thisArg, ...args) {
    const self = this;
    const fn = function () {
        self.apply(this instanceof self ? this : self, args.concat(Array.prototype.slice.call(arguments)));
    }
    fn.prototype = Object.create(self.prototype);
    return fn;
}
