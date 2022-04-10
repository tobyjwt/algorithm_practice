function myNew(constructor, ...args) {
    const obj = Object.create(constructor.prototype);
    const result =  constructor.call(obj, ...args);
    return Object.prototype.toString.call(result) === '[object, Object]' ? result : obj;
}
