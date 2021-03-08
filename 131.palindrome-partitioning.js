// 给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。
//
// 返回 s 所有可能的分割方案。
//
// 示例:
//
//     输入:  "aab"
// 输出:
//     [
//         ["aa","b"],
//         ["a","a","b"]
//     ]

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const result = [];

    findPartition(0, []);
    function findPartition(start, tempResult) {
        if (start === s.length) {
            result.push(tempResult);
        }
        for (let i = start + 1; i <= s.length; i++) {
            const temp = s.slice(start, i);
            if (isPartition(temp)) {
                tempResult.push(temp);
                    findPartition(i, tempResult);
                    tempResult.pop();
            }
        }
    }

    return result;
};

function isPartition(s) {
    let left, right;
    if (s.length % 2 === 0) {
        left = s.length / 2 - 1;
        right = left + 1;
    } else {
        left = right = Math.floor(s.length / 2);
    }
    while(left >= 0) {
        if (s[left] !== s[right]) {
            return false;
        }
        left--;
        right++;
    }
    return true;
}

console.log(partition('aa'));
