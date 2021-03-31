/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function(N) {
    const opMap = ['*', '/', '+', '-'];
    let n = 0;
    let result = N;
    let resultArr = [];
    N--;
    while(N > 0) {
        const op = opMap[n];
        if (op === '*') {
            result = result * N;
        } else if (op === '/') {
            result = ~~(result / N);
            resultArr.push(result);
        } else if (op === '+') {
            resultArr.push(N);
        } else if (op === '-') {
            result = -N;
        }
        N--;
        if (N > 0) {
            n = (n + 1) % 4;
        }
    }
    const op = opMap[n];
    if (op === '*' || op === '-') {
        resultArr.push(result);
    }
    let sum = 0;
    console.log(resultArr);
    for (let i = 0; i < resultArr.length; i++) {
        sum = sum + resultArr[i];
    }
    return sum;
};

console.log(clumsy(10));
