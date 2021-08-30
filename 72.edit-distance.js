/**
 * 给你两个单词word1 和word2，请你计算出将word1转换成word2 所使用的最少操作数。

 你可以对一个单词进行如下三种操作：

 插入一个字符
 删除一个字符
 替换一个字符

 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1));
    dp[0][0] = 0;
    for (let i = 1; i < m + 1; i++) {
        dp[i][0] = i;
    }
    for (let i = 1; i < n + 1; i++) {
        dp[0][i] = i;
    }
    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            const a = dp[i - 1][j] + 1;
            const b = dp[i][j - 1] + 1;
            let c = dp[i - 1][j - 1];
            if (word1[i - 1] !== word2[j - 1]) {
                c += 1;
            }
            dp[i][j] = Math.min(a, b, c);
        }
    }
    return dp[m][n];
};

console.log(minDistance('horse', 'ros')); // 3
console.log(minDistance('intention', 'execution')); // 5
