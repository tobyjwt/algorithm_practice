const getType = (obj) => {
    const _toString = Object.prototype.toString;
    return _toString.call(obj).slice(8, -1);
}

function template(str, data = {}) {
    // let reg = /^{{\s*[a-zA-Z_][a-zA-Z0-9_]*\s*}}$/g;
    let reg = /{{\s*[a-zA-Z_][a-zA-Z0-9]*\s*}}/g;
    str = str.replace(reg, (str, ...args) => {
        const strKey = str.replace(/[{}]/g, '').trim();
        for (const key in data) {
            if (key === strKey) {
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

const str1 = '<div>{{ a }}</div>  <div>{{  b }}</div>';
const data1 = { a: 1, b: ['a', 'b', 'c']};
console.log(template(str1, data1));

