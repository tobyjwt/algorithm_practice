/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (!nums || !nums.length) {
        return 0;
    }
    const n = nums.length;
    if (n === 1) {
        return nums[0];
    }
    const dp1 = [[0, 0]];
    const dp2 = [[nums[0], 0]];
    for (let i = 1; i < n; i++) {
        dp1[i] = [];
        dp1[i][0] = dp1[i - 1][1] + nums[i];
        dp1[i][1] = Math.max(...dp1[i - 1]);
        if (i < n - 1) {
            dp2[i] = [];
            dp2[i][0] = dp2[i - 1][1] + nums[i];
            dp2[i][1] = Math.max(...dp2[i - 1]);
        }
    }
    return Math.max(...dp1[n - 1], ...dp2[n - 2]);
};

console.log(rob([2,3,2])); // 3
console.log(rob([1,2,3,1])); // 4
