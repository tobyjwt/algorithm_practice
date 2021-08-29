/**
 * 给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。

 子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。

 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    const n = s.length;
    if (n < 2) {
        return n;
    }
    const dp = new Array(n).fill(0).map(() => new Array(n));
    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            if (s[i] === s[j]) {
                if (len === 2) {
                    dp[i][j] = 2;
                } else {
                    dp[i][j] = dp[i + 1][j - 1] + 2;
                }
            } else {
                if (len === 2) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = Math.max(dp[i + 1][j - 1], dp[i + 1][j], dp[i][j - 1]);
                }
            }
        }
    }
    return dp[0][n - 1];
};

console.log(longestPalindromeSubseq('bbbab'));
console.log(longestPalindromeSubseq('cbbd'));
