/**
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

 返回滑动窗口中的最大值。
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const queue = [];
    for (let i = 0; i < k; i++) {
        while (queue.length && nums[queue[queue.length - 1]] < nums[i]) {
            queue.pop();
        }
        queue.push(i);
    }
    const res = [nums[queue[0]]];
    for (let i = k; i < nums.length; i++) {
        while (queue.length && nums[queue[queue.length - 1]] < nums[i]) {
            queue.pop();
        }
        if (queue[0] <= i - k) {
            queue.shift();
        }
        queue.push(i);
        res.push(nums[queue[0]]);
    }
    return res;
};

// console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))
console.log(maxSlidingWindow([7, 2, 4], 2))
