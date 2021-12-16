/**
 * 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // const n = prices.length;
    // const dp = new Array(n).fill(0).map(() => new Array(3).fill(0).map(() => new Array(2).fill(0)));
    // // dp[2][1][0]  第2天，已完成一次交易，持有股票
    // dp[0] = [
    //     [-prices[0], 0],
    //     [-Infinity, -Infinity],
    //     [-Infinity, -Infinity]
    // ];
    // for (let i = 1; i < n; i++) {
    //     dp[i][0][0] = Math.max(dp[i - 1][0][0], -prices[i]);
    //     // dp[i][0][1] 无须更新
    //     dp[i][1][0] = Math.max(dp[i - 1][1][0], dp[i - 1][1][1] - prices[i]);
    //     dp[i][1][1] = Math.max(dp[i - 1][1][1], dp[i - 1][0][0] + prices[i]);
    //     // dp[i][2][0] 无须更新

    //     dp[i][2][1] = Math.max(dp[i - 1][2][1], dp[i - 1][1][0] + prices[i]);
    // }
    // return Math.max(...dp[n - 1].flat());

    // 更快更省
    const n = prices.length;
    const dp = new Array(n).fill([[], []]);
    dp[0][0][0] = 0;
    dp[0][1][0] = -prices[0];
    dp[0][0][1] = -Infinity;
    dp[0][1][1] = -Infinity;
    dp[0][0][2] = -Infinity;
    dp[0][1][2] = -Infinity;
    for (let i = 1; i < n; i++) {
        dp[i][0][0] = dp[i - 1][0][0];
        dp[i][1][0] = Math.max(dp[i - 1][1][0], -prices[i]);
        dp[i][0][1] = Math.max(dp[i - 1][0][1], dp[i - 1][1][0] + prices[i]);
        dp[i][1][1] = Math.max(dp[i - 1][1][1], dp[i - 1][0][1] - prices[i]);
        dp[i][0][2] = Math.max(dp[i - 1][0][2], dp[i - 1][1][1] + prices[i]);

    }
    return Math.max(...dp[n - 1][0]);
};

console.log(maxProfit([3,3,5,0,0,3,1,4])); // 6
console.log(maxProfit([1,2,3,4,5])); // 4