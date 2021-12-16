/**
 * 给你一个整数数组 nums ，你可以对它进行一些操作。

 每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除 所有 等于 nums[i] - 1 和 nums[i] + 1 的元素。

 开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    // 用map实现
    if (!nums || !nums.length) {
        return 0;
    }
    nums.sort((a, b) => a - b);
    const map = {};
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        if (map[nums[i]]) {
            map[nums[i]] = map[nums[i]] + 1;
        } else {
            map[nums[i]] = 1;
        }
    }
    const arr = Object.keys(map);
    const dp = [[map[arr[0]] * arr[0], 0]];
    for (let i = 1; i < arr.length; i++) {
        dp[i] = [];
        dp[i][1] = Math.max(...dp[i - 1]);
        if (arr[i] - arr[i - 1] === 1) {
            dp[i][0] = dp[i - 1][1] + map[arr[i]] * arr[i];
        } else {
            dp[i][0] = dp[i][1] + map[arr[i]] * arr[i];
        }
    }
    return Math.max(...dp[dp.length - 1]);
};

console.log(deleteAndEarn([3,4,2])); // 6
console.log(deleteAndEarn([2,2,3,3,3,4])); // 9
