function sleep(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, time)
    });
}

async function test() {
    console.log('start');
    await sleep(3000);
    console.log('end');
}

test();
