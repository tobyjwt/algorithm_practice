function getMax(prices) {
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
}

console.log(getMax([1,3,1,2, 1, 9]));
