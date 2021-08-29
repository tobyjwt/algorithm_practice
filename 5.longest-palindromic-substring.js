/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

 示例 1：

 输入: "babad"
 输出: "bab"
 注意: "aba" 也是一个有效答案。
 示例 2：

 输入: "cbbd"
 输出: "bb"

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/longest-palindromic-substring
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const n = s.length;
    if (n < 2) {
        return s;
    }
    const dp = new Array(n).fill(0).map(() => new Array(n));
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }
    let begin = 0;
    let max = 1;

    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            if (s[i] === s[j]) {
                console.log('flag');
                if (len === 2 || dp[i + 1][j - 1]) {
                    dp[i][j] = true;
                    if (len > max) {
                        begin = i;
                        max = len;
                    }
                }
            } else {
                dp[i][j] = false;
            }
        }
    }
    return s.substr(begin, max);
};

// console.log(longestPalindrome('babad'));
// console.log(longestPalindrome('ac'));
console.log(longestPalindrome('cbbd'));
