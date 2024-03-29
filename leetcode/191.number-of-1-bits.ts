// 编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为汉明重量）。

function hammingWeight(n: number): number {
    const str = n.toString(2);
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '1') {
            count++;
        }
    }
    return count;
};