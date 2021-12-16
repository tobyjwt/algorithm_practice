/**
 * 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    const dp = new Array(n + 1).fill(0);
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(j * dp[i - j], j * (i - j), dp[i]);
        }
    }
    return dp[n];
};

console.log(integerBreak(2)); // 1
console.log(integerBreak(10)); // 36
