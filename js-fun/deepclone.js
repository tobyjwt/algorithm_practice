function deepClone(obj) {
    if (typeof obj !== 'object') {
        return obj;
    }

    if (obj.nodeType && 'cloneNode' in obj) {
        return obj.cloneNode(true);
    }

    const type = Object.prototype.toString.call(obj).slice(8, -1);

    if (type === 'Date') {
        return new Date(obj.getTime());
    }

    if (type === 'RegExp') {
        const flag = [];
        if (obj.ignoreCase) flag.push('i');
        if (obj.global) flag.push('g');
        if (obj.multiline) flag.push('m');
        return new RegExp(obj.souce, flag.join(''));
    }

    const result = type === 'Array' ? [] : obj.construtor ? new obj.construtor() : {};
    for (const key in obj) {
        result[key] = deepClone(obj[key]);
    }
    return result;
}

const source = {
    a: 123,
    b: '45',
    c: [1, 2, [3, 4]],
    d: {
        d1: 'd1',
        d2: 'd22'
    },
    e: new Date(),
    f: new RegExp('[a-z]*', 'img')
};

const copy = deepClone(source);
source.c[2][1] = 999;
console.log(source);
console.log(copy);
