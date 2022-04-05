function firstMissingPositive(nums: number[]): number {
    // 额外空间不是常数级别
    // let map: { [key: number]: true } = {};
    // const n = nums.length;
    // for (let i = 0; i < n; i++) {
    //     if (nums[i] > 0) {
    //         map[nums[i]] = true;
    //     }
    // }

    // for (let i = 1; i <= n + 1; i++) {
    //     if (!map[i]) {
    //         return i;
    //     }
    // }

    const n = nums.length;
    for (let i = 0; i < n; i++) {
        while(nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            // [nums[i], nums[nums[i] - 1]] = [nums[nums[i] - 1], nums[i]];
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        }
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    return n + 1;
};

console.log(firstMissingPositive([3,4,-1,1]));