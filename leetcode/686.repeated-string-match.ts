/**
 * 给定两个字符串 a 和 b，寻找重复叠加字符串 a 的最小次数，使得字符串 b 成为叠加后的字符串 a 的子串，如果不存在则返回 -1。

注意：字符串 "abc" 重复叠加 0 次是 ""，重复叠加 1 次是 "abc"，重复叠加 2 次是 "abcabc"。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/repeated-string-match
 */

function repeatedStringMatch(a: string, b: string): number {
    if (!b) {
        return 0;
    }
    let count = 1;
    let str = a;
    while (count * a.length < b.length * 3 || count < 3) {
        if (str.indexOf(b) > -1) {
            return count;
        } else {
            str += a;
            count++;
        }
    }
    return -1;
};

console.log(repeatedStringMatch('abcd', 'cdabcdab'));
console.log(repeatedStringMatch('a', 'aa'));
console.log(repeatedStringMatch('abc', 'wxyz'));