// https://juejin.cn/post/6974293549135167495#heading-26

class Dep {
    constructor() {
        this.subs = []
    }

    addSub(sub) {
        this.subs.push(sub)
    }

    depend() {
        if (Dep.target) {
            Dep.target.addDep(this) // 让watcher,去存放dep，然后里面dep存放对应的watcher，两个是多对多的关系
        }
    }

    notify() {
        for (let i = 0; i < this.subs.length; i++) {
            this.subs[i].fn()
        }
    }
}

Dep.target = null

export function pushTarget(watcher) {
    // 改变target的指向
    Dep.target = watcher
    stack.push(watcher)
}

export function popTarget() {
    stack.pop()
    Dep.target = stack[stack.length - 1]
}


class Watcher {
    constructor(vm, exp, fn, options) {
        if (options) {
            this.lazy = !!options.lazy // 为computed 设计的
        } else {
            this.lazy = false
        }
        this.dirty = this.lazy;
        this.vm = vm
        this.exp = exp
        this.fn = fn
        this.vm[exp]
        this.deps = [];
        this.depsId = new Set() // dep 已经收集过相同的watcher 就不要重复收集了
    }

    addDep(dep) {
        let id = dep.id;
        if (!this.depsId.has(id)) {
            this.depsId.add(id);
            this.deps.push(dep);
            dep.addSub(this);
        }
    }

    // get函数，计算值
    get() {
        const vm = this.vm
        pushTarget(this)
        // 执行函数
        let value = this.getter.call(vm, vm)
        popTarget()
        return value
    }

    // 执行get，并且 this.dirty = false
    evaluate() {
        this.value = this.get()
        this.dirty = false
    }

    // 所有的属性收集当前的watcer
    depend() {
        let i = this.deps.length
        while(i--) {
            this.deps[i].depend()
        }
    }
}

class Observer {
    constructor(targetObject) {
        def(targetObject, '__ob__', this);//在 targetObject 上 添加  Observer 实例, setter时 通知该实例
        this.walk(targetObject)
        this.dep = new Dep()
    }

    walk(obj) {
        Object.keys(obj).forEach(key => {
            defineReactive(obj, key, obj[key])
        });
    }

}

function observe(data) {
    if (Object.prototype.toString.call(data) !== '[object Object]') {
        return
    }
    new Observer(data)
}

function defineReactive(obj, key, val) {
    observe(val)

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            console.log('get');
            const ob = this.__ob__
            ob.dep.depend();
            return val
        },
        set: function reactiveSetter(newVal) {
            console.log('set');
            if (newVal === val) return
            val = newVal
            observe(newVal)
            const ob = this.__ob__
            ob.dep.notify();
        },

    })
}

function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    });
}

class Vue {
    constructor(options) {
        Observer(options.data);
    }

}
