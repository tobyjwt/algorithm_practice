/**
 * 给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。

 请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。

 假设每一种面额的硬币有无限个。

 题目数据保证结果符合 32 位带符号整数。

 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (let i = 0; i < coins.length; i++) {
        const item = coins[i];
        for (let j = 1; j <= amount; j++) {
            if (j - item >= 0) {
                dp[j] = dp[j - item] > 0 ? (dp[j] + dp[j - item]) : dp[j]
            }
        }
    }
    return dp[amount];
};

console.log(change(5, [1, 2, 5])); // 4
console.log(change(3, [2])); // 0
console.log(change(10, [10])); // 1
console.log(change(0, [10])); // 1
