function trailingZeroes(n: number): number {
    let divide = 5;
    let res = 0;
    while (divide <= n) {
        res += Math.trunc(n / divide);
        divide *= 5;
    }
    return res;
};

console.log(trailingZeroes(3));
console.log(trailingZeroes(5));
console.log(trailingZeroes(15));