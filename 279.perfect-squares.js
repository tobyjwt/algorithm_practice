/**
 * 给定正整数n，找到若干个完全平方数（比如1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

 给你一个整数 n ，返回和为 n 的完全平方数的 最少数量 。

 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let idx = 1;
    const nums = [];
    while(idx * idx <= n) {
        nums.push(idx * idx);
        idx++;
    }
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < nums.length; j++) {
            const item = nums[j];
            if (i >= item) {
                dp[i] = Math.min(dp[i], dp[i - item] + 1);
            }
        }
    }
    return dp[n];
};

console.log(numSquares(12)); // 3
console.log(numSquares(13)); // 2
