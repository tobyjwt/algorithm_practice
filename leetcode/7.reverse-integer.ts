function reverse(x: number): number {
    let isNeg = false;
    if (x < 0) {
        isNeg = true;
    }
    x = Math.abs(x);
    let result = Number(x.toString().split('').reverse().join(''));
    if (isNeg) {
        result = -result;
        if (result < -Math.pow(2, 31)) {
            return 0;
        }
        return result;
    }
    if (result > Math.pow(2, 31) - 1) {
        return 0;
    }
    return result;
};