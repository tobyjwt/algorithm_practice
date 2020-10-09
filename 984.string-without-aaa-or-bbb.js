// 给定两个整数 A 和 B，返回任意字符串 S，要求满足：
//
// S 的长度为 A + B，且正好包含 A 个 'a' 字母与 B 个 'b' 字母；
// 子串 'aaa' 没有出现在 S 中；
// 子串 'bbb' 没有出现在 S 中。
//  
//
// 示例 1：
//
// 输入：A = 1, B = 2
// 输出："abb"
// 解释："abb", "bab" 和 "bba" 都是正确答案。
// 示例 2：
//
// 输入：A = 4, B = 1
// 输出："aabaa"
//
//
// 提示：
//
// 0 <= A <= 100
// 0 <= B <= 100
// 对于给定的 A 和 B，保证存在满足要求的 S。
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/string-without-aaa-or-bbb
//     著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function(A, B) {
    let S = '';
    let a = 'a';
    let b = 'b';
    if (A < B) {
        let temp = B;
        B = A;
        A = temp;
        temp = b;
        b = a;
        a = temp;
    }
    while (A > 0 || B > 0) {

        if (A > B) {
            S += a;
            A--;
        }

        if (B > 0) {
            S += a + b;
            A--;
            B--;
        }
    }
    return S;
};