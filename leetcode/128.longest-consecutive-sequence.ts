// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。


function longestConsecutive(nums: number[]): number {
    // O(nlogn) 复杂度
    // const n = nums.length;
    // if (!n) {
    //     return 0;
    // }
    // nums.sort((a, b) => a - b);
    // let max = 1;
    // let count = 1;
    // let last = nums[0];
    // for (let i = 1; i < n; i++) {
    //     const cur = nums[i];
    //     if (cur === last) {
    //         continue;
    //     }
    //     if (cur - last === 1) {
    //         max = Math.max(++count, max);
    //     } else {
    //         count = 1;
    //     }
    //     last = cur;
    // }
    // return max;
    const n = nums.length;
    if (!n) {
        return 0;
    }
    const set: Set<number> = new Set();
    for (let i = 0; i < n; i++) {
        set.add(nums[i]);
    }
    let max = 1;
    for (const i of set) {
        if (!set.has(i - 1)) {
            let count = 0;
            let start = i;
            while(set.has(start)) {
                count++;
                start++;
            }
            if (count > max) {
                max = count;
            }
        }
    }
    return max;
};

console.log(longestConsecutive([100,4,200,1,3,2])); // 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])); // 9
console.log(longestConsecutive([1,2,0,1])); // 3