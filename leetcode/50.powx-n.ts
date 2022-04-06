function myPow(x: number, n: number): number {
    if (n === 0) {
        return 1;
    }
    if (x === 0) {
        return 0;
    }
    let lessThan0 = false;
    if (n < 0) {
        lessThan0 = true;
        n = -n;
    }
    const map: { [key: number]: number} = {};

    const result = getResult(n);
    if (lessThan0) {
        return 1 / result;
    }
    return result;

    function getResult(n: number): number {
        if (map[n] !== undefined) {
            return map[n];
        }
        if (n === 1) {
            return x;
        } else {
            const reuslt = getResult(Math.trunc(n / 2)) * getResult(n - Math.trunc(n / 2));
            map[n] = reuslt;
            return reuslt;
        }
    }
};

console.log(myPow(2, 8), Math.pow(2, 8));
console.log(myPow(3, 2), Math.pow(3, 2));
console.log(myPow(2, -8), Math.pow(2, -8));