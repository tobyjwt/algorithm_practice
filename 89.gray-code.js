/**
 * 格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异。

 给定一个代表编码总位数的非负整数 n，打印其格雷编码序列。即使有多个不同答案，你也只需要返回其中一种。

 格雷编码序列必须以 0 开头。
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    if (n === 0) {
        return [0];
    }
    if (n === 1) {
        return [0, 1]
    }
    let pre = ['0', '1'];
    let cur = 1;
    while (cur < n) {
        const length = pre.length;
        for (let i = length - 1; i >= 0; i--) {
            pre.push('1' + pre[i]);
            pre[i] = '0' + pre[i];
        }
        cur++;
    }
    return pre.map(item => parseInt(item, 2));
};

console.log(grayCode(2));
console.log(grayCode(3));
