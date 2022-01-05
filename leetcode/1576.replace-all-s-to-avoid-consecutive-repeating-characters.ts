/**
 * 
 * 给你一个仅包含小写英文字母和 '?' 字符的字符串 s，请你将所有的 '?' 转换为若干小写字母，使最终的字符串不包含任何 连续重复 的字符。

    注意：你 不能 修改非 '?' 字符。

    题目测试用例保证 除 '?' 字符 之外，不存在连续重复的字符。

    在完成所有转换（可能无需转换）后返回最终的字符串。如果有多个解决方案，请返回其中任何一个。可以证明，在给定的约束条件下，答案总是存在的。
 */

function modifyString(s: string): string {
    const n = s.length;
    if (n <= 1) {
        return s;
    }
    const arr = s.split('');
    if (arr[0] === '?') {
        if (arr[1] === 'a') {
            arr[0] = 'b';
        } else {
            arr[0] = 'a';
        }
    }
    if (arr[n - 1] === '?') {
        if (arr[n - 2] === 'a') {
            arr[n - 1] = 'b';
        } else {
            arr[n - 1] = 'a';
        }
    }
    for (let i = 1; i < n - 1; i++) {
        if (arr[i] === '?') {
            const [prev, next] = [arr[i - 1], arr[i + 1]];
            if (prev !== 'a' && next !== 'a') {
                arr[i] = 'a';
            } else if (prev !== 'b' && next !== 'b') {
                arr[i] = 'b';
            } else {
                arr[i] = 'c';
            }
        }
    }
    return arr.join('');
};

console.log(modifyString('?zs'));
console.log(modifyString('ubv?w'));