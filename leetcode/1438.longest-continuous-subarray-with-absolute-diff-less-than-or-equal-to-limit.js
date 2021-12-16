// 给你一个整数数组 nums ，和一个表示限制的整数 limit，请你返回最长连续子数组的长度，该子数组中的任意两个元素之间的绝对差必须小于或者等于 limit 。
//
// 如果不存在满足条件的子数组，则返回 0 。

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    // let length = nums.length;
    // if (length <= 1) {
    //     return 0;
    // } else {
    //     let left = 0;
    //     let right = 1;
    //     let count = 0;
    //     while(right < length) {
    //         const current = nums.slice(left, right + 1);
    //         const min = Math.min(...current);
    //         const max = Math.max(...current);
    //         if (Math.abs(min - max) <= limit) {
    //             count = Math.max(count, current.length);
    //             right++;
    //         } else {
    //             left++;
    //             if(right === left) {
    //                 right++;
    //             }
    //         }
    //     }
    //     return count;
    // }
    const minQueue = [];
    const maxQueue = [];
    const n = nums.length;
    let count = 0;
    let left = 0;
    let right = 0;
    while(right < n) {
        while (minQueue.length && nums[right] < minQueue[minQueue.length - 1]) {
            minQueue.pop();
        }
        while (maxQueue.length && nums[right] > maxQueue[maxQueue.length - 1]) {
            maxQueue.pop();
        }
        maxQueue.push(nums[right]);
        minQueue.push(nums[right]);
        while (minQueue.length && maxQueue.length && maxQueue[0] - minQueue[0] > limit ) {
            if (nums[left] === minQueue[0]) {
                minQueue.shift();
            }
            if (nums[left] === maxQueue[0]) {
                maxQueue.shift();
            }
            left++;
        }
        count = Math.max(count, right + 1 - left);
        right++;
    }
    return count;
};

console.log(longestSubarray([10,1,2,4,7,2], 5));
