/**
 * 给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定  s 是否可以被空格拆分为一个或多个在字典中出现的单词。

 说明：

 拆分时可以重复使用字典中的单词。
 你可以假设字典中没有重复的单词。

 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dp = [wordDict.includes(s[0])];
    const n = s.length;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < wordDict.length; j++) {
            const item = wordDict[j];
            // console.log(i, s.slice(i + 1 - item.length, i + 1), '-', item);
            if (i + 1 - item.length >= 0 && (dp[i - item.length] || (i - item.length === -1)) && s.slice(i + 1 - item.length, i + 1) === item) {
                dp[i] = true;
            }
        }
    }
    // console.log(dp);
    return !!dp[n - 1];
};

console.log(wordBreak('leetcode', ['leet', 'code']));
console.log(wordBreak('applepenapple', ['apple', 'pen']));
console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']));
