/**
 * 给你一个非负整数数组 nums ，你最初位于数组的第一个位置。

 数组中的每个元素代表你在该位置可以跳跃的最大长度。

 你的目标是使用最少的跳跃次数到达数组的最后一个位置。

 假设你总是可以到达数组的最后一个位置。
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const dp = [0];
    for (let i = 1; i < nums.length; i++) {
        let min = null;
        for (let j = i - 1; j >= 0; j--) {
            if(i - j <= nums[j]) {
                if (!min) {
                    min = dp[j];
                } else {
                    min = Math.min(min, dp[j]);
                }
            }
        }
        dp[i] = min + 1;
    }
    return dp[dp.length - 1];

    // 方法二
    // const dp = [0];
    // const n = nums.length;
    // for (let i = 0; i < n - 1; i++) {
    //     for (let j = i+ 1; j <= i + nums[i]; j++) {
    //         dp[j] = Math.min(dp[j] || Infinity, dp[i] + 1);
    //     }
    // }
    // return dp[n - 1];
};

console.log(jump([2,3,1,1,4])); // 2
console.log(jump([2,3,0,1,4])); // 2
