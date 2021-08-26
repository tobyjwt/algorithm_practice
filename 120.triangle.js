/**
 * 给定一个三角形 triangle ，找出自顶向下的最小路径和。

 每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。

 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const n = triangle.length;
    if (n === 0) {
        return 0;
    }
    const dp = [[triangle[0][0]]];
    for (let i = 1; i < n; i++) {
        dp[i] = [];
        dp[i][0] = dp[i - 1][0] + triangle[i][0];
        dp[i][triangle[i].length - 1] = dp[i - 1][triangle[i].length - 2] + triangle[i][triangle[i].length - 1];
        for (let j = 1; j < triangle[i].length - 1; j++) {
            dp[i][j]  = triangle[i][j] + Math.min(dp[i - 1][j - 1], dp[i - 1][j]);
        }
    }
    return Math.min(...dp[n - 1]);
};

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]));
