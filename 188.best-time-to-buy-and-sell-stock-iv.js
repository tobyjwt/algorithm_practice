/**
 * 给定一个整数数组 prices ，它的第 i 个元素 prices[i] 是一支给定的股票在第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(k, prices) {
    const n = prices.length;
    if (k < 1 || n < 1) {
        return 0;
    }
    const dp = new Array(n).fill(0).map(() => new Array(2).fill(0).map(() => new Array(k + 1).fill(-Infinity)));
    console.log(dp);
    dp[0][0][0] = 0;
    dp[0][1][0] = -prices[0];
    for (let i = 1; i < n; i++) {
        dp[i][0][0] = 0;
        dp[i][1][0] = Math.max(dp[i - 1][1][0], -prices[i]);
        for (let j = 1; j <= k; j++) {
            dp[i][0][j] = Math.max(dp[i - 1][0][j], dp[i - 1][1][j - 1] + prices[i]);
            dp[i][1][j] = Math.max(dp[i - 1][1][j], dp[i - 1][0][j] - prices[i]);
        }
    }
    return Math.max(...dp[n - 1][0]);
};

console.log(maxProfit(2, [2,4,1])); // 2
console.log(maxProfit(2, [3,2,6,5,0,3])); // 7