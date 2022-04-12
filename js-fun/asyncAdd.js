function asyncAdd(a, b, callback) {
    setTimeout(() => {
        callback(null, a + b);
    }, 1000)
}

function sum(...args) {
    return new Promise(resolve => {
        console.log(args);
        if (args.length === 1) {
            resolve(args[0]);
        } else if (args.length === 2) {
            asyncAdd(args[0], args[1], (_, result) => {
                resolve(result)
            });
        } else {
            const mid = Math.trunc(args.length / 2);
            Promise.all([
                sum(...args.slice(0, mid)),
                sum(...args.slice(mid))
                ]
            ).then(res => resolve(sum(...res)));
        }
    })
}

// 1s方案
function sum1(...args) {
    return new Promise(resolve => {
        let result = 0;
        let obj = {};
        obj.toString = function () {
            return result;
        }
        const promises = [];
        for (const num of args) {
            promises.push(new Promise(resolve => {
                asyncAdd(obj, num, (_, res) => {
                    resolve(res);
                });
            }).then(res => result = res));
        }

        Promise.all(promises).then(res => resolve(result));
    })
}

let start = Date.now();

sum1(1, 2, 3, 4, 5, 6, 8).then(res => {
    console.log(res);
    console.log('共耗时', Date.now() - start);
})
