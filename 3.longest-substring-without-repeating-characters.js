/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let num = 0;
    const arr = s.split('');
    let queue = [];
    arr.forEach(item => {
        if (queue.indexOf(item) < 0) {
            queue.push(item)
            if (queue.length > num) {
                num = queue.length;
            }
        } else {
            queue.splice(0, queue.indexOf(item) + 1);
            queue.push(item);
        }
    });
    return num;
};
