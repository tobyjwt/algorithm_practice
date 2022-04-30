const data = { name: 'toby', age: 18, info: {city: 'gz' } };
const reactive = function (obj) {
    if (typeof obj !== 'object') {
        return obj;
    }

    const handler = {
        get(target, key, receiver) { // target指向原始data，key是当前操作的属性，receiver是代理对象proxyData
            // 只处理本身属性，不管原型属性(例如xxarray.push方法，调用是会触发get，但这个方法不需要处理)
            const ownKeys = Reflect.ownKeys(target);
            if (ownKeys.includes(key)) {
                // 处理get
                console.log('get', key);
            }
            const result = Reflect.get(target, key, receiver);
            return reactive(result); // 返回值!important 深度监听
        },

        set(target, key, val, receiver) {
            // 重复的数据不处理
            const oldVal = target[key];
            if (val === oldVal) {
                return true;
            }
            console.log('set');
            const result = Reflect.set(target, key, val, receiver);
            // 劫持set
            return result; // 是否成功
        },

        deleteProperty(target, key) {
            const result = Reflect.deleteProperty(target, key);
            // 劫持删除
            return result;
        }
    };

    return new Proxy(obj);
}
