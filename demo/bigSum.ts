function bigSum(s1: string, s2: string): string {
    if (s1.length < s2.length) {
        [s1, s2] = [s2, s1];
    }
    while(s2.length < s1.length) {
        s2 = '0' + s2;
    }
    let temp = 0;
    const n = s1.length;
    let sum = '';
    for (let i = n - 1; i >= 0; i--) {
        const curSum = Number(s1[i]) + Number(s2[i]) + temp;
        if (curSum > 9) {
            temp = 1;
            sum = curSum % 10 + sum;
        } else {
            temp = 0;
            sum = curSum + sum;
        }
    }
    if (temp) {
        sum = '1' + sum;
    }
    return sum;
}

console.log(bigSum('123456789', '123456789'), 123456789 * 2);
console.log(bigSum('123456789', '987'), 123456789 + 987);
console.log(bigSum('12', '1'));