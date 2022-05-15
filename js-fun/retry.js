function createRetry(fun, times, interval) {
    let isAsync = false;
    try {
        const doOnce = fun().then().catch(() => {});
        isAsync = true;
    } catch (e) {
        console.log('error');
        isAsync = false;
    }

    let count = 1;
    let result = '';
    let status = '';

    return function (params) {
        if (isAsync) {
            return new Promise((resolve, reject) => {
                doOnce.then(resolve).catch(() => {
                    asyncRun(params, resolve, reject);
                });
            })
        } else {
            syncRun(params);
            if (status === 'error') {
                throw new Error('error');
            } else {
                return result;
            }
        }
    }

    function syncRun (params) {
        if (count >= times) {
            status = 'error';
        }
        count++;
        try {
            result = fun(params);
        } catch (e) {
            setTimeout(() => {
                syncRun(params);
            }, interval);
        }
    }

    function asyncRun(params, resolve, reject) {
        if (count >= times) {
            reject();
            return;
        }
        count++;
        setTimeout(() => {
            fun(params).then(resolve).catch(() => {
                asyncRun(params, resolve, reject)
            })
        }, interval);
    }
}


function request () {
    return Promise.reject(1);
}
// const promiseRetry = createRetry(request, 5, 1000);
// promiseRetry().then(res => console.log(res)).catch(() => {
//     console.log('error');
// });
// Promise.reject().catch(() => {}).finally(() => {
//     console.log('asd');
// })

const syncRetry = createRetry(() => {
    return 123;
});
console.log(syncRetry());
