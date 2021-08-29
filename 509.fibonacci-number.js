/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n < 2) {
        return n;
    }
    const dp = [0, 1];
    let i = 2;
    while(i <= n) {
        dp[i] = dp[i - 1] + dp[i - 2];
        i++;
    }
    console.log(dp);
    return dp[n];
};

console.log(fib(3));
