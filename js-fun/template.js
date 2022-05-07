const getType = (obj) => {
    const _toString = Object.prototype.toString;
    return _toString.call(obj).slice(8, -1);
}

function template(str, data = {}) {
    // let reg = /^{{\s*[a-zA-Z_][a-zA-Z0-9_]*\s*}}$/g;
    let reg = /{{\s*([a-zA-Z_][a-zA-Z0-9]*)\s*}}/g;
    str = str.replace(reg, (_, str, ...args) => {
        console.log(_, str);
        // const strKey = str.replace(/[{}]/g, '').trim();
        for (const key in data) {
            if (key === str) {
                const value = data[key];
                if (getType(value) === 'String' || getType(value) === 'Number') {
                    return value;
                }
                if (getType(value) === 'Array') {
                    return value.join(',');
                }
                // 其它处理
            }
        }
        return '123';
    });
    return str;
}


