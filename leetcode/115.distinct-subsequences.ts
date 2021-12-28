/**
 * 给定一个字符串 s 和一个字符串 t ，计算在 s 的子序列中 t 出现的个数。

字符串的一个 子序列 是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）题目数据保证答案符合 32 位带符号整数范围。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/distinct-subsequences

 * @param s 
 * @param t 
 */

function numDistinct(s: string, t: string): number {
    // 超过时间限制
    // let result = 0;
    // find(0, 0, '');
    // return result;
    
    // function find(sIdx: number, tIdx: number, str: string): void {
    //     if (tIdx === t.length) {
    //         if (str === t) {
    //             result++;
    //             console.log(result);
    //         }
    //         return;
    //     }
    //     if (sIdx === s.length) {
    //         return;
    //     }
    //     if (s[sIdx] === t[tIdx]) {
    //         find(sIdx + 1, tIdx + 1, `${str}${s[sIdx]}`);
    //     }
    //     find(sIdx + 1, tIdx, str);
    // }

    const n = s.length;
    const m= t.length;
    const dp: number[][] = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));
    for (let i = 0; i <= n; i++) {
        dp[i][m] = 1;
    }
    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            if (s[i] === t[j]) {
                dp[i][j] = dp[i + 1][j + 1] + dp[i + 1][j];
            } else {
                dp[i][j] = dp[i + 1][j];
            }
        }
    }
    return dp[0][0];
};
console.log(numDistinct('rabbbit', 'rabbit'));
console.log(numDistinct("adbdadeecadeadeccaeaabdabdbcdabddddabcaaadbabaaedeeddeaeebcdeabcaaaeeaeeabcddcebddebeebedaecccbdcbcedbdaeaedcdebeecdaaedaacadbdccabddaddacdddc", "bcddceeeebecbc")); //700531452